import { Canvas} from "@react-three/fiber";
import { FirstPersonControls } from "@react-three/drei";
import House from "./House";
import WaterDrop from "./WaterDrop";


const World = () => {
    return (
        <Canvas
            camera={{
                position: [2, 3, 5],
            }}
        >
            <FirstPersonControls
                movementSpeed={5}
                
            />

            <ambientLight intensity={4} />
            <directionalLight position={[0, 10, 10]} />

            <House />
        </Canvas>
    );
};

export default World;
