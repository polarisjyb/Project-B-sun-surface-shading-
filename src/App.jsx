import react from "react";
import { Canvas } from '@react-three/fiber';
import Sphere from "./components/Sphere";
import { SpaceDust } from "./components/SpaceDust";


// import { Canvas } from "@react-three/fiber";
// import Sphere from "./components/Sphere";

const App = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{
        position: [0, 0, 20],
        fov: 90,
        near: 0.1,
        far: 3000,}}>
        <SpaceDust count={3000} />
        <Sphere />
        <axesHelper args={[3000, 3000, 3000]} />
      </Canvas>
    </div>
  );
};

export default App;