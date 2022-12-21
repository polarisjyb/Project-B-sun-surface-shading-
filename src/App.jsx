import react from "react";
import { Canvas } from '@react-three/fiber';
import Sphere from "./components/Sphere";

// import { Canvas } from "@react-three/fiber";
// import Sphere from "./components/Sphere";

const App = () => {
  return (
    <Canvas>
      <Sphere />
    </Canvas>

    // <Sphere />

  );
};

export default App;