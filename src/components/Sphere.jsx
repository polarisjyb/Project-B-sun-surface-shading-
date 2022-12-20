import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { BoxGeometry } from 'three';


const Box = (props) => {
  const mesh = useRef();
  // rotate the box
  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.1

  });

  // draw the sphere
  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      {/* <sphereGeometry args={[2, 32, 32]} /> */}
      <meshStandardMaterial color="#f2f" />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas dpr={window.devicePixelRatio}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
      <OrbitControls autoRotate autoRotateSpeed={5} />
    </Canvas>
  );
}
