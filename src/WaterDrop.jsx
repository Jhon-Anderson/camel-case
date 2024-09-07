import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const WaterDrop = () => {
    const dropRef = useRef();

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        if (dropRef.current) {
            // Desplazamiento hacia la derecha en X
            dropRef.current.position.x = time; // La gota avanza hacia la derecha conforme pasa el tiempo
            
            // Movimiento ondulatorio en el eje Y usando la función coseno
            dropRef.current.position.y = Math.cos(time * 2) * 1; // Oscila en el eje Y (la velocidad de oscilación se ajusta multiplicando el tiempo)
        }
    });

    return (
        <mesh ref={dropRef} position={[0, 0, 0]}>
            <sphereGeometry args={[0.3, 30, 30]} /> {/* Ajusta el tamaño de la gota */}
            <meshPhongMaterial color={"blue"} transparent opacity={4} /> {/* Material para la gota */}
        </mesh>
    );
};

export default WaterDrop;
