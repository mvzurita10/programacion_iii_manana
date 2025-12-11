import { useState } from 'react';

export default function SumaForm() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const suma = Number(num1) + Number(num2);
        alert(`La suma es: ${suma}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Número 1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />

            <input
                type="number"
                placeholder="Número 2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />

            <button type="submit">Sumar</button>
        </form>
    );
}
