import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const House = () => {
    const boxRef = useRef();

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        if (boxRef.current) {
            boxRef.current.position.y = Math.cos(time) * 2;
        }
    });

    return (
        <>
            <mesh
                position={[0, 1, 0]}
                rotation={[0, Math.PI * 0.25, 0]}
                scale={1.5}
            >
                <coneGeometry args={[1, 1, 5]} />
                <meshPhongMaterial color={"red"} />
            </mesh>
            <mesh ref={boxRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshPhongMaterial color={"blue"} />
            </mesh>
        </>
    );
};

export default House;
