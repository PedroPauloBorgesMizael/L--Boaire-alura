import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import bannerBackgroud from "./assets/banner1.png";
import Galeria from "./componentes/Galeria";
import photos from "./photos.json";
import fotosPopular from "./populares.json";
import { useState } from "react";
import ModalZoom from "./componentes/ModalZoom";
import Rodape from "./componentes/Rodape";
import ZoomPopular from "./componentes/ZoomPopular";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #a2abf2 4.16%,
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
`;

const MainContainer = styled.main`
  display: flex;
  gap: 20%;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {
  const [photosDrinks, setPhotosDrinks] = useState(photos);
  const [photosPopular] = useState(fotosPopular)
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [fotoPopularSelecionada, setFotoPopularSelecionada] = useState(null);

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita,
      });
    }
    setPhotosDrinks(
      photosDrinks.map((fotoDaGaleria) => {
        return {
          ...fotoDaGaleria,
          favorita:
            fotoDaGaleria.id === foto.id
              ? !foto.favorita
              : fotoDaGaleria.favorita,
        };
      })
    );
  };

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner backgroundImage={bannerBackgroud}>
              Beba Drinks <br /> Lê Boaire Drinks
            </Banner>
            <Galeria
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              fotos={photosDrinks}
              fotosPopulares={photosPopular}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <Rodape />
      <ModalZoom
        foto={fotoSelecionada}
        aoAlternarFavorito={aoAlternarFavorito}
        aoFechar={() => setFotoSelecionada(null)}
      />
      <ZoomPopular 
      foto={fotoPopularSelecionada}
      aoFechar={() => setFotoPopularSelecionada(null)}
      />
    </FundoGradiente>
  );
}

export default App;
