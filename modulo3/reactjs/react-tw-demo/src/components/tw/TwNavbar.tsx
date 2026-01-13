import React from "react";
import { NavLink } from "react-router-dom";

const base ="px-3 py-2 rounded-xl text-sm font-semibold transition-colors border border-white/10";
const active = "bg-white/10 text-white";
const idle = "text-white/70 hover:text-white hover:bg-white/10";

export default function TwNavbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
            <div className="text-white font-extrabold tracking-tight">Academia TW</div>

            <nav className="flex items-center gap-2">
            <NavLink to="/" className={({ isActive }) => `${base} ${isActive ? active : idle}`}>Inicio</NavLink>
            <NavLink to="/about" className={({ isActive }) => `${base} ${isActive ? active : idle}`}>Acerca</NavLink>
            </nav>
        </div>
        </header>
    );
}