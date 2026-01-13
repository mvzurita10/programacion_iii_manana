import React from "react";

export default function TwFooter() {
    return (
        <footer className="bg-slate-950 border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-6 flex flex-wrap justify-between items-center gap-2">
            <small className="text-white/50">© {new Date().getFullYear()} Academia TW</small>
            <div className="flex gap-3">
            <a className="text-white/70 hover:text-white" href="#">Docs</a>
            <a className="text-white/70 hover:text-white" href="#">Soporte</a>
            </div>
        </div>
        </footer>
    );
}