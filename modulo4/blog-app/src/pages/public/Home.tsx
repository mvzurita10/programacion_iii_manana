import { useEffect, useState, type JSX } from "react";
import { Box, Typography, Card, CardContent, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getPublicPosts } from "../../services/posts.service";

interface Post {
    id: string;
    title: string;
    excerpt?: string;
    content: string;
}

const HEADER_HEIGHT = 64;

export function Home(): JSX.Element {
    const [posts, setPosts] = useState<Post[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Datos de prueba mientras se carga la API
        const testPosts: Post[] = [
            {
                id: "test-1",
                title: "🚀 Bienvenido a mi Blog",
                excerpt: "Primer post de ejemplo mostrando cómo funciona la aplicación",
                content: "Contenido del primer post..."
            },
            {
                id: "test-2",
                title: "📚 Tutorial de Desarrollo",
                excerpt: "Guía completa para principiantes en desarrollo web moderno",
                content: "Contenido del segundo post..."
            }
        ];
        
        setPosts(testPosts);
        
        // Cargar posts reales usando el servicio
        getPublicPosts({ page: 1, limit: 2 })
            .then(data => {
                if (data.items.length > 0) {
                    setPosts(data.items);
                }
            })
            .catch(error => {
                console.error("Error al cargar posts:", error);
            });
            
    }, []);

    return (
        <Box sx={{ pt: `${HEADER_HEIGHT}px`, pb: 4 }}>
            <Container maxWidth="md">
                <Typography variant="h4" sx={{ mb: 3 }}>
                    Últimos posts ({posts.length} posts)
                </Typography>
                
                {posts.length === 0 && (
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        No hay posts disponibles.
                    </Typography>
                )}

                {posts.map((post) => (
                    <Card
                        key={post.id}
                        sx={{
                            mb: 2,
                            border: "1px solid",
                            borderColor: "divider",
                            borderRadius: 2,
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6">{post.title}</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                {post.excerpt || (post.content ? post.content.slice(0, 100) + "..." : "")}
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{ mt: 2 }}
                                onClick={() => navigate(`/post/${post.id}`)}
                            >
                                Leer más
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Container>
        </Box>
    );
}