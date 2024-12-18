import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagens from "./Imagens";

const GaleriaContainer = styled.div`
  display: flex;
  gap: 3em;
  margin-right: 10px;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const ImagensContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5em;
`;

const ImagensPopulares = styled.div`
  display: flex;
  flex-direction: column;
`;

const Galeria = ({
  fotos = [],
  fotosPopulares = [],
  aoFotoSelecionada,
  aoAlternarFavorito,
}) => {
  return (
    <div>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Conheça nossos drinks</Titulo>
          <ImagensContainer>
            {fotos.map((foto) => (
              <Imagens
                aoZoomSolicitado={aoFotoSelecionada}
                aoAlternarFavorito={aoAlternarFavorito}
                key={foto.id}
                foto={foto}
              />
            ))}
          </ImagensContainer>
        </SecaoFluida>
        <ImagensPopulares>
          <Titulo $alinhamento="center">Populares</Titulo>
          {fotosPopulares.map((fotop) => (
            <Populares 
            key={fotop.id} 
            foto={fotop} 
            zoomPopularSolicitado={aoFotoSelecionada}
            />
          ))}
        </ImagensPopulares>
      </GaleriaContainer>
    </div>
  );
};

export default Galeria;
