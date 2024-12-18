import styled from "styled-components";
import BotaoIcone from "../BotaoIcone";

const FooterEstilizado = styled.footer`
  background-color: #04244f;
  color:#FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  width: 100%; 
  p {
    margin-right: 20px;
  }
`;

const DivBotoes = styled.div`
  display: flex;
  margin:20px;
`
const Rodape = () => {
  return (
    <FooterEstilizado>
      <DivBotoes>
        <BotaoIcone>
        <a href="https://x.com/paulo_miza55348">
          <img src="/imagens/icones/twitter.png" />
        </a>
        </BotaoIcone>
        <BotaoIcone>
          <a href="https://www.instagram.com/pedro.p_062/">
            <img src="/imagens/icones/instagram.png" />
          </a>
        </BotaoIcone>
      </DivBotoes>
      <p>Desenvolvido por Pedro Paulo Borges Mizael</p>
    </FooterEstilizado>
  );
};

export default Rodape;
