import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Game, TitleScreen } from "./views";

function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <Routes>
          <Route path="/" element={<TitleScreen />} />
          <Route path="/play" element={<Game />} />
        </Routes>
      </PageContainer>
    </BrowserRouter>
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
