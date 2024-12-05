import styled from "styled-components";

const BannerEstilizado = styled.div`
    background-image: url('/imagens/Banner.png');
    background-size: cover;
    background-repeat: no-repeat;
    width: 50vh;
    height: 50vh;
    border: 2px solid transparent;
    border-radius: 20px;
    margin: 24px;
`

const Banner = () => {
    return (
        <BannerEstilizado>
            <h2>Beba Drinks <br/>Lê Boare</h2>
        </BannerEstilizado>
    )
};

export default Banner