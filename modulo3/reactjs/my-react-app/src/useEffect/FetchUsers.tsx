import { useEffect, useState } from 'react';

export default function FetchUser() {
    const [users, setUsers] = useState<any[] | null>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);

    return (
        <div>
        <h3>Usuario:</h3>

        {users && users.length > 0 ? (
            users.map((user, i) => (
            <li key={i}>
                {user.name} - {user.email}
            </li>
            ))
        ) : (
            <p>Cargando...</p>
        )}
        </div>
    );
}