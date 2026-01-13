import React, { useState } from "react";

export default function CourseCTA() {
    const [name, setName] = useState("");
    const [ok, setOk] = useState(false);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        setOk(true);
        setName("");
        setTimeout(() => setOk(false), 2000);
    };

    return (
        <section className="bg-slate-950 border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="text-white font-bold text-lg">Inscripción rápida</h2>

            {ok && (
            <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-emerald-200">
                ✅ Registro simulado
            </div>
            )}

            <form onSubmit={submit} className="mt-4 grid gap-2 md:grid-cols-[1fr_auto]">
            <input
                className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-600/50"
                type="text"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <button className="h-11 rounded-xl bg-blue-600 px-5 text-white font-semibold hover:bg-blue-500 transition" type="submit">
                Inscribirme
            </button>
            </form>
        </div>
        </section>
    );
}