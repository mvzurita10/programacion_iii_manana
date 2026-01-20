import {
    Alert,
    Button,
    Chip,
    CircularProgress,
    IconButton,
    Pagination,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import { createPost, deletePost, getPosts, updatePost } from "../../services/posts.service";
import type { PostDto } from "../../services/posts.service";
import PostFormDialog from "../../components/posts/PostFormDialog";
import ConfirmDialog from "../../components/common/ConfirmDialog";
import { useCategoriesOptions } from "../../hooks/useCategoriesOptions";
import { useUi } from "../../context/UiContext";
import { getApiErrorMessage } from "../../utils/getApiErrorMessage";
import type { JSX } from "react";

function useDebouncedValue<T>(value: T, delayMs: number): T {
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
        const t = setTimeout(() => setDebounced(value), delayMs);
        return () => clearTimeout(t);
    }, [value, delayMs]);
    return debounced;
}

export default function PostsPage(): JSX.Element {
    const { notify } = useUi();
    const [sp, setSp] = useSearchParams();

    const pageParam = Number(sp.get("page") || "1");
    const limitParam = Number(sp.get("limit") || "10");
    const searchParam = sp.get("search") || "";

    const [page, setPage] = useState(Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1);
    const [limit] = useState(Number.isFinite(limitParam) && limitParam > 0 ? limitParam : 10);

    const [search, setSearch] = useState(searchParam);
    const debouncedSearch = useDebouncedValue(search, 450);

    const [items, setItems] = useState<PostDto[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const { options: categories, loading: loadingCategories } = useCategoriesOptions();

    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState<"create" | "edit">("create");
    const [current, setCurrent] = useState<PostDto | null>(null);

    const [confirmOpen, setConfirmOpen] = useState(false);
    const [toDelete, setToDelete] = useState<PostDto | null>(null);

    const queryKey = useMemo(
        () => ({
            page,
            limit,
            search: debouncedSearch.trim() || undefined,
            searchField: debouncedSearch.trim() ? "title" : undefined,
        }),
        [page, limit, debouncedSearch]
    );

    useEffect(() => {
        setSp((prev) => {
            const next = new URLSearchParams(prev);
            next.set("page", String(page));
            next.set("limit", String(limit));
            if (search) next.set("search", search);
            else next.delete("search");
            return next;
        });
    }, [page, limit, search, setSp]);

    useEffect(() => {
        setPage(1);
    }, [debouncedSearch]);

    const load = async () => {
        try {
            setLoading(true);
            setError(null);
            const res = await getPosts(queryKey);
            setItems(res.items);
            setTotalPages(res.meta.totalPages || 1);
        } catch (e) {
            setError(getApiErrorMessage(e));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        load();
    }, [queryKey]);

    const onCreate = () => {
        setMode("create");
        setCurrent(null);
        setOpen(true);
    };

    const onEdit = (p: PostDto) => {
        setMode("edit");
        setCurrent(p);
        setOpen(true);
    };

    const onSubmit = async (payload: { title: string; content: string; categoryId?: string | null }) => {
        try {
            setError(null);
            if (mode === "create") {
                await createPost(payload);
                setOpen(false);
                setPage(1);
                notify({ message: "Post creado.", severity: "success" });
                await load();
                return;
            }
            if (!current) return;
            await updatePost(current.id, payload);
            setOpen(false);
            notify({ message: "Post actualizado.", severity: "success" });
            await load();
        } catch (e) {
            notify({ message: getApiErrorMessage(e), severity: "error" });
        }
    };

    const askDelete = (post: PostDto) => {
        setToDelete(post);
        setConfirmOpen(true);
    };

    const confirmDelete = async () => {
        if (!toDelete) return;
        try {
            await deletePost(toDelete.id);
            notify({ message: "Post eliminado.", severity: "success" });
            setConfirmOpen(false);
            setToDelete(null);
            await load();
        } catch (e) {
            notify({ message: getApiErrorMessage(e), severity: "error" });
        }
    };

    const categoryName = (p: PostDto) => {
        const id = p.categoryId || p.category?.id || "";
        if (!id) return "Sin categoría";
        const found = categories.find((c) => c.id === id);
        return found?.name || p.category?.name || "Categoría";
    };

    return (
        <Stack spacing={2}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ sm: "center" }}>
                <Typography variant="h4" sx={{ flexGrow: 1 }}>
                    Posts
                </Typography>

                <Button variant="contained" startIcon={<AddIcon />} onClick={onCreate} disabled={loadingCategories}>
                    Nuevo
                </Button>
            </Stack>

            {error ? <Alert severity="error">{error}</Alert> : null}

            <TextField
                label="Buscar (por título)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                fullWidth
            />

            {loading ? (
                <CircularProgress />
            ) : items.length === 0 ? (
                <Alert severity="info">No hay posts para mostrar.</Alert>
            ) : (
                <>
                    <TableContainer component={Paper} variant="outlined">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Título</TableCell>
                                    <TableCell>Categoría</TableCell>
                                    <TableCell align="right">Acciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map((p) => (
                                    <TableRow key={p.id}>
                                        <TableCell>{p.title}</TableCell>
                                        <TableCell>
                                            <Chip size="small" label={categoryName(p)} />
                                        </TableCell>
                                        <TableCell align="right">
                                            <IconButton onClick={() => onEdit(p)} aria-label="editar">
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => askDelete(p)} aria-label="eliminar">
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Stack direction="row" justifyContent="center" sx={{ py: 1 }}>
                        <Pagination count={totalPages} page={page} onChange={(_, v) => setPage(v)} />
                    </Stack>
                </>
            )}

            <PostFormDialog
                open={open}
                mode={mode}
                initial={current}
                categories={categories}
                onClose={() => setOpen(false)}
                onSubmit={onSubmit}
            />

            <ConfirmDialog
                open={confirmOpen}
                title="Confirmar eliminación"
                description={`¿Eliminar el post "${toDelete?.title || ""}"?`}
                onCancel={() => { setConfirmOpen(false); setToDelete(null); }}
                onConfirm={confirmDelete}
            />
        </Stack>
    );
}