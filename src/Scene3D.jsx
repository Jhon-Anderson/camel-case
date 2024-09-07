import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useGLTF, TrackballControls } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from 'three';  // Cargar texturas

function Model() {
  const { scene } = useGLTF('/models/tierra.glb');
  const meshRef = useRef('/textures/254.jpg');

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshPhongMaterial({ color: 'lightblue', shininess: 100 });
    }
  });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.position.y = Math.cos(t) * 2;
  });

  return <primitive ref={meshRef} object={scene} scale={1} position={[0, 0, 0]} />;
}

function OrbitingObject() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.position.x = Math.cos(t) * 5;
    meshRef.current.position.z = Math.sin(t) * 5;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
}

function Scene3D() {
  const texture = useLoader(TextureLoader, '/textures/254.jpg');

  return (
    <>
      {/* Añadir el audio que se reproduce automáticamente */}
      <audio src="/audio/ESPACIO..mp3" autoPlay loop />
      
      <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [0, 0, 10], fov: 50 }}>
        <primitive attach="background" object={texture} />
        <directionalLight intensity={4} position={[0, 5, 5]} />
        <ambientLight intensity={0.9} />
        <Model />
        <OrbitingObject />
        <TrackballControls />
      </Canvas>
    </>
  );
}

export default Scene3D;
