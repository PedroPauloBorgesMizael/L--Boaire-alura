import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #b5aa88 4.16%,
    #cfc5a3 48%,
    #f7f0da 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
  <FundoGradiente>
    <EstilosGlobais />
    <Cabecalho /> 
    <BarraLateral />
  </FundoGradiente>
  )
}

export default App;