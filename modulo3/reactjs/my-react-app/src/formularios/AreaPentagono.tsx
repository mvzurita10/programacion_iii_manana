import { useState } from 'react';

export default function AreaPentagono() {
    const [perimetro, setPerimetro] = useState("");
    const [apotema, setApotema] = useState("");

    const calcularArea = (e: any) => {
        e.preventDefault();
        const area = (Number(perimetro) * Number(apotema)) / 2;
        alert(`El area del pentagono es: ${area}`);
    };

    return (
        <form onSubmit={calcularArea}>
            <input
                type="number"
                placeholder="Perimetro"
                value={perimetro}
                onChange={e => setPerimetro(e.target.value)}
            /><br />

            <input
                type="number"
                placeholder="Apotema"
                value={apotema}
                onChange={e => setApotema(e.target.value)}
            /><br />

            <button type="submit">Calcular area</button>
        </form>
    );
}    