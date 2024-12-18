import styled from "styled-components";

const BtnPopular = styled.button`
  width: ${(props) => (props.$expandida ? "50%" : "212px")};
  max-width: ${(props) => (props.$expandida ? "100%" : "300px")};
  background-color: transparent;
  border: none;
  cursor: pointer;

  & > img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
  }
`;

const Populares = ({ foto, expandida = false, zoomPopularSolicitado }) => {
  return (
    <BtnPopular $expandida={expandida} aria-hidden={expandida} onClick={() => zoomPopularSolicitado(foto)} >
      <img src={foto.path} />
    </BtnPopular>
  );
};

export default Populares;
