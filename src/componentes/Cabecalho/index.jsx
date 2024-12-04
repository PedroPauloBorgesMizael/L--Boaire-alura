import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"

const HeadarEstilizado = styled.header`
    padding: 60px 24px;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 15%;
    }
`

const Cabecalho = () => {
    return (
        <>
        <HeadarEstilizado>
            <img src="/imagens/Logo.png" alt="Logo Lê Boire Drinks" />
            <CampoTexto />
        </HeadarEstilizado>
        </>
    )
}

export default Cabecalho