import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { softShadows, MeshWobbleMaterial, OrbitControls } from "drei";
import { useSpring, a } from "react-spring/three";
import "./App.scss";

softShadows();

function App() {
  return (
    <Canvas
      className="canvas"
      camera={{ position: [-5, 2, 10], fov: 60 }}
    ></Canvas>
  );
}
export default App;
xq;
