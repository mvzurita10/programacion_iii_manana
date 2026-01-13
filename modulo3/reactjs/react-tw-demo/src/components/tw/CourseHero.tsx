import React from "react";

export default function CourseHero() {
    return (
        <section className="bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-14">
            <p className="text-white/70 text-sm">Academia</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Cursos de React + Testing
            </h1>
            <p className="mt-3 text-white/70 max-w-2xl">
            Aprende con componentes pequeños primero y luego construye un Home completo.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
            <button className="rounded-xl bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-500 transition">
                Ver cursos
            </button>
            <button className="rounded-xl border border-white/15 px-4 py-2 text-white/90 font-semibold hover:bg-white/10 transition">
                Plan de estudio
            </button>
            </div>
        </div>
        </section>
    );
}