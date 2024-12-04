import styled from "styled-components";
import search from "/imagens/lupa.png";

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
  height: px;
  padding: 10px 14px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #fff;
  background: transparent;
  box-sizing: border-box;
  width: 500px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 12px;
  right: 10px;
  width: 38px;
  align-items: center;
`;

const CampoTexto = (props) => {
  return (
    <ContainerEstilizado>
      <CampoTextoEstilizado {...props} />
      <IconeLupa src={search} alt="ícone de lupa" />
    </ContainerEstilizado>
  );
};

export default CampoTexto;
