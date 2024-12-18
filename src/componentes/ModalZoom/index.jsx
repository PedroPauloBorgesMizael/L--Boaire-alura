import styled from "styled-components";
import Imagens from "../Galeria/Imagens";
import BotaoIcone from "../BotaoIcone";

const OverLay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
`;

const ModalZoom = ({ foto, aoAlternarFavorito, aoFechar }) => {
  return (
    <>
      {foto && (
        <>
          <OverLay />
          <DialogEstilizado open={!!foto} onClose={aoFechar} >
            <Imagens foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito} />
            <form method="dialog">
              <BotaoIcone formMethod="dialog">
                <img src="/imagens/icones/close.png" alt="Icone de fechar" />
              </BotaoIcone>
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalZoom;
