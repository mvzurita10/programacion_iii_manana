import { Box, Toolbar } from "@mui/material";
import {PublicHeader} from "../components/public/PublicHeader";
import PublicFooter from "../components/public/PublicFooter";
import { Outlet } from "react-router-dom";
import type { JSX } from "react";

const FOOTER_HEIGHT = 56;

export default function PublicLayout(): JSX.Element {
    return (
        <Box minHeight="100vh">
        <PublicHeader />

        {/* Spacer real del AppBar (header fijo) */}
        <Toolbar />

        {/* Contenido con espacio inferior para el footer fijo */}
        <Box sx={{ pb: `${FOOTER_HEIGHT}px` }}>
            <Outlet />
        </Box>

        <PublicFooter />
        </Box>
    );
}