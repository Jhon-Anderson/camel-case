import { useRef } from "react";
import { useFrame} from "@react-three/fiber";

const WaterDrop = () => {
    const dropRef =useRef();

    useFrame(({clock}) => {
        const time = clock.getElepsedTime();
        if (dropRef.current){
            //simula la caida de una gota en el eje Y
            dropRef.current.postion.y = 2 - (time % 4); //la gota cae y se reinicia
        }
    });

    return (
        <mesh ref={dropRef} position={[0,2,0]}>
            <sphereGeometry args={[0.1,32,32]}/> {/*Ajusta el tamaño de la gota  */}
            <meshPhongMaterial color={"blue"} transparent opacity={0.8} /> {/* Material para la gota */}
        </mesh>
    );
};

export default WaterDrop;