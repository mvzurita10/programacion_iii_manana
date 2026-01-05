import { useState } from 'react';

export default function CalcularAreaTriangulo() {
    const [base, setBase] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState<number | null>(null);
    const [calculado, setCalculado] = useState(false);

    const handleCalcular = () => {
        const b = parseFloat(base);
        const h = parseFloat(altura);

        if (!isNaN(b) && !isNaN(h) && b > 0 && h > 0) {
            const area = (b * h) / 2;
            
            const confirmar = window.confirm(`¿Deseas calcular el area con Base: ${b} y Altura: ${h}?`);
            
            if (confirmar) {
                setResultado(area);
                setCalculado(true);
            }
        } else {
            window.confirm("Datos invalidos. Por favor ingresa numeros mayores a 0.");
            setCalculado(false);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>Calculadora de Area</h2>
            {!calculado ? (
                <>
                    <p>Ingresa las dimensiones del triangulo:</p>
                    <input 
                        type="number" 
                        value={base} 
                        placeholder="Base (cm, m...)" 
                        onChange={(e) => setBase(e.target.value)} 
                    /><br /><br />
                    
                    <input 
                        type="number" 
                        value={altura} 
                        placeholder="Altura" 
                        onChange={(e) => setAltura(e.target.value)} 
                    /><br /><br />

                    <button onClick={handleCalcular}>
                        Calcular ahora
                    </button>
                </>
            ) : (
                <div>
                    <p>Calculo realizado con exito</p>
                    <div style={{ fontSize: '1.2rem', backgroundColor: '#cd6666ff', padding: '10px', borderRadius: '8px' }}>
                        El area resultante es: <strong>{resultado}</strong>
                    </div>
                    <br />
                    <button onClick={() => setCalculado(false)}>Hacer otro calculo</button>
                </div>
            )}
        </div>
    );
}