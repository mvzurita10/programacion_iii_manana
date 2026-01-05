import { useState, useId } from 'react';

export default function MayorDeTres() {
    const idNum1 = useId();
    const idNum2 = useId();
    const idNum3 = useId();

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [resultado, setResultado] = useState<number | null>(null);

    const calcularMayor = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        const n3 = parseFloat(num3);

        if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
            const mayor = Math.max(n1, n2, n3);
            setResultado(mayor);
        } else {
            alert("Por favor, ingresa los tres numeros.");
        }
    };

    const borrar = () => {
        setNum1('');
        setNum2('');
        setNum3('');
        setResultado(null);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '300px' }}>
            <h2>Mayor de tres numeros</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div>
                    <label htmlFor={idNum1}>Primer numero:</label>
                    <input 
                        id={idNum1}
                        type="number" 
                        value={num1} 
                        onChange={(e) => setNum1(e.target.value)} 
                    />
                </div>

                <div>
                    <label htmlFor={idNum2}>Segundo numero:</label>
                    <input 
                        id={idNum2}
                        type="number" 
                        value={num2} 
                        onChange={(e) => setNum2(e.target.value)} 
                    />
                </div>

                <div>
                    <label htmlFor={idNum3}>Tercer numero:</label>
                    <input 
                        id={idNum3}
                        type="number" 
                        value={num3} 
                        onChange={(e) => setNum3(e.target.value)} 
                    />
                </div>

                <button onClick={calcularMayor} style={{ marginTop: '10px' }}>
                    ¿Cual es el mayor?
                </button>
            </div>

            {resultado !== null && (
                <div style={{ 
                    marginTop: '20px', 
                    padding: '15px', 
                    backgroundColor: '#e8f0fe', 
                    borderLeft: '5px solid #1a73e8',
                    borderRadius: '4px'
                }}>
                    El numero mayor es: <strong>{resultado}</strong>
                    <br />
                    <button onClick={borrar} style={{ marginTop: '10px', fontSize: '0.8rem' }}>
                        Borrar
                    </button>
                </div>
            )}
        </div>
    );
}