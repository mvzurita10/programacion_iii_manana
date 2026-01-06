import { useState, useDeferredValue, useId } from 'react';

export default function RegistroUsuario() {
    const idEmail = useId();
    const idNombres = useId();
    const idApellidos = useId();
    const idPass = useId();

    const [email, setEmail] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [password, setPassword] = useState('');
    const [registrado, setRegistrado] = useState(false);

    const emailDiferido = useDeferredValue(email);
    const esValido = emailDiferido.includes("@") && emailDiferido.includes(".");

    const handleEnviar = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (esValido && nombres && apellidos && password) {
            setRegistrado(true);
        } else {
            alert("Por favor, completa todos los campos correctamente.");
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px' }}>
            <h2>Formulario de Registro</h2>
            
            {!registrado ? (
                <form onSubmit={handleEnviar} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    
                    {/* Campo Email con validación diferida */}
                    <label htmlFor={idEmail}>Email:</label>
                    <input 
                        id={idEmail}
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        placeholder="ejemplo@correo.com" 
                    />
                    <small style={{ color: esValido ? 'green' : 'red' }}>
                        {emailDiferido === "" ? "Ingresa un correo" : esValido ? "✓ Formato válido" : "✗ Formato inválido"}
                    </small>

                    {/* Nombres */}
                    <label htmlFor={idNombres}>Nombres:</label>
                    <input 
                        id={idNombres}
                        type="text" 
                        value={nombres} 
                        onChange={e => setNombres(e.target.value)} 
                        placeholder="Tus nombres" 
                    />

                    {/* Apellidos */}
                    <label htmlFor={idApellidos}>Apellidos:</label>
                    <input 
                        id={idApellidos}
                        type="text" 
                        value={apellidos} 
                        onChange={e => setApellidos(e.target.value)} 
                        placeholder="Tus apellidos" 
                    />

                    {/* Password */}
                    <label htmlFor={idPass}>Password:</label>
                    <input 
                        id={idPass}
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        placeholder="Tu contraseña" 
                    />

                    <button type="submit" style={{ marginTop: '10px', padding: '10px', cursor: 'pointer' }}>
                        Enviar Registro
                    </button>
                </form>
            ) : (
                <div style={{ 
                    textAlign: 'center', 
                    padding: '20px', 
                    backgroundColor: '#d4edda', 
                    color: '#155724', 
                    borderRadius: '8px',
                    border: '1px solid #c3e6cb'
                }}>
                    <h3>🎉 Registro exitoso</h3>
                    <p>Bienvenido, {nombres} {apellidos}.</p>
                    <button onClick={() => setRegistrado(false)}>Volver</button>
                </div>
            )}
        </div>
    );
}