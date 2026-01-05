import { useState } from 'react';

export default function CalcularSalario() {
    const [horasTrabajadas, setHorasTrabajadas] = useState('');
    const [pagoPorHora, setPagoPorHora] = useState('');
    const [salarioTotal, setSalarioTotal] = useState<number | null>(null);
    const [calculado, setCalculado] = useState(false);

    const handleCalcularSalario = () => {
        const horas = parseFloat(horasTrabajadas);
        const pago = parseFloat(pagoPorHora);

        if (!isNaN(horas) && !isNaN(pago) && horas > 0 && pago > 0) {
            const total = horas * pago;
            
            setSalarioTotal(total);
            setCalculado(true);
        } else {
            alert("Por favor ingresa valores validos.");
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>Calculadora de Salario Semanal</h2>
            {!calculado ? (
                <>
                    <p>Ingresa los datos del empleado:</p>
                    <input 
                        type="number" 
                        value={horasTrabajadas} 
                        placeholder="Horas trabajadas en la semana" 
                        onChange={(e) => setHorasTrabajadas(e.target.value)} 
                        style={{ width: '250px' }}
                    /><br /><br />
                    
                    <input 
                        type="number" 
                        value={pagoPorHora} 
                        placeholder="Valor por hora ($)" 
                        onChange={(e) => setPagoPorHora(e.target.value)} 
                        style={{ width: '250px' }}
                    /><br /><br />

                    <button onClick={handleCalcularSalario}>
                        Calcular Salario
                    </button>
                </>
            ) : (
                <div>
                    <p>Nomina generada con exito</p>
                    <div style={{ 
                        fontSize: '1.2rem', 
                        backgroundColor: '#d4edda', 
                        color: '#155724',
                        padding: '15px', 
                        borderRadius: '8px',
                        border: '1px solid #c3e6cb'
                    }}>
                        El salario total de la semana es: <strong>${(salarioTotal ?? 0).toFixed(2)}</strong>
                    </div>
                    <br />
                    <button onClick={() => {
                        setCalculado(false);
                        setSalarioTotal(null);
                        setHorasTrabajadas('');
                        setPagoPorHora('');
                    }}>
                        Nuevo Calculo
                    </button>
                </div>
            )}
        </div>
    );
}