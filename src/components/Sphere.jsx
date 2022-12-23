import * as THREE from 'three';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
// import { SpaceDust } from './SpaceDust';

const Sphere = (props) => {

  // particle - points
  // draw the sphere (points)

  const points = useRef();

  useFrame(() => {
    points.current.rotation.y = points.current.rotation.z += 0.01

  });

  return (
    <points {...props} ref={points}>
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      <sphereGeometry args={[20, 50, 100]} />
      <pointsMaterial color="#5786F5" size={0.1} sizeAttenuation />
      {/* <meshStandardMaterial color="#f2f" /> */}
    </points>
  );


  // polygon - mesh
  // draw the sphere (mesh)
  // const mesh = useRef();

  // useFrame(() => {
  //   mesh.current.rotation.y = mesh.current.rotation.z += 0.01

  // });
  
  // return (
  //   <mesh {...props} ref={mesh}>
  //     {/* <boxGeometry args={[1, 1, 1]} /> */}
  //     <sphereGeometry args={[10, 32, 32]} />
  //     <meshPhongMaterial color="#f2f" sizeAttenuation />
  //   </mesh>
  // );


}

export default function Scene() {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sphere position={[0, 0, 0]}/>
      <OrbitControls target={[0, 0, 5]} enableDamping={true} autoRotate autoRotateSpeed={8} />
    </>
    // <>
    //   <ambientLight />
    //   <pointLight position={[10, 10, 10]} />
    //   <Box position={[0, 0, 0]} />
    //   <OrbitControls autoRotate autoRotateSpeed={5} />
    // </>
  );
}
