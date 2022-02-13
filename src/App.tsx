import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Box } from "./components"

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[2.5, 0, 0]} />
    </Canvas>
  );
}

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  border: none;
`;

export default App;
