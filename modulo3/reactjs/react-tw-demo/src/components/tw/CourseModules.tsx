import React from "react";

function ModuleCard({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <h3 className="text-white font-bold">{title}</h3>
        <p className="mt-2 text-white/70 text-sm">{desc}</p>
        </div>
    );
    }

    export default function CourseModules() {
    return (
        <section className="bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="text-white font-bold text-lg">Módulos</h2>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
            <ModuleCard title="Hooks" desc="useState, useEffect, useMemo, useCallback, useRef." />
            <ModuleCard title="UI" desc="Componentes, layouts y estilos con Tailwind." />
            <ModuleCard title="Testing" desc="Jest + React Testing Library." />
            </div>
        </div>
        </section>
    );
}