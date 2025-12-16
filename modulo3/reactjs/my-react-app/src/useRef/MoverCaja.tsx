
import { useRef, useEffect } from 'react';

export default function MoverCaja() { 
    const boxRef = useRef<HTMLDivElement | null>(null);
    const position = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const mover = (e: KeyboardEvent) => {
        const paso = 10;
        switch (e.key) {
            case 'ArrowUp':
            position.current.y -= paso;
            break;
            case 'ArrowDown':
            position.current.y += paso;
            break;
            case 'ArrowLeft':
            position.current.x -= paso;
            break;
            case 'ArrowRight':
            position.current.x += paso;
            break;
            default:
            return;
        }

        if (boxRef.current) {
            boxRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
        }
    };

        window.addEventListener('keydown', mover);
        return () => window.removeEventListener('keydown', mover);
    }, []);

    return (
        <div
        ref={boxRef}
        style={{
            width: '60px',
            height: '60px',
            backgroundColor: 'deepskyblue',
            borderRadius: '50%',
            position: 'relative',
            transition: 'transform 0.1s ease'
        }}
        />
    );
}
