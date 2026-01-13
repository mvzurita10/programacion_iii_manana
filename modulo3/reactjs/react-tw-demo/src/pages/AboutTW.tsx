import React from "react";

export default function AboutTW() {
    return (
        <main className="bg-slate-950 min-h-[70vh]">
        <div className="mx-auto max-w-5xl px-4 py-12">
            <h1 className="text-white text-2xl font-extrabold">Acerca (Tailwind)</h1>
            <p className="mt-2 text-white/70">Segunda página para practicar Router.</p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="m-0 list-disc pl-5 text-white/70 space-y-1">
                <li>Fase LAB: 5 ejemplos aislados</li>
                <li>Fase Home: landing de cursos</li>
            </ul>
            </div>
        </div>
        </main>
    );
}