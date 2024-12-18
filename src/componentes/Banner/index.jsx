import styled from "styled-components";

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: self-start;
    min-height: 250px;
    margin: 0;
    margin-right: 16px;
    border-radius: 20px;
    max-width: 100%;
`

const TituloEstilizado = styled.h1`
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    color: #423933;
    background-color: #fff;
    border-radius: 8px;
    opacity: 0.8;
    max-width: 280px;
    padding: 8px 28px;
    margin-left: 15px;
`

const Banner = ({ children , backgroundImage }) => {
    return (
        <FigureEstilizada $backgroundImage={backgroundImage}>
            <TituloEstilizado>{children}</TituloEstilizado>
        </FigureEstilizada>
    )
};

export default Banner