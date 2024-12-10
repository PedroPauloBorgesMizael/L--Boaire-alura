import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import bannerBackgroud from "./assets/Banner.png";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #a2abf2  4.16%,
    #202763 48%,
    #000847 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;

`

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <BarraLateral />
        <Banner backgroundImage={bannerBackgroud}>
          Beba Drinks <br /> Lê Boaire Drinks
        </Banner>
      </AppContainer>
    </FundoGradiente>
  )
}

export default App;