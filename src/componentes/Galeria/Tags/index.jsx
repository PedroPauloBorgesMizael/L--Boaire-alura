import styled from 'styled-components';
import tags from './tags.json';

const TagContainer = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
`

const TextoTag = styled.p`
    color: #D9D9D9;
    font-size: 24px;
`

const BotaoTag = styled.button`
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 300;
    border-radius: 10px;
    padding: 10px 8px;
    background-color: rgb(217, 217, 217, 0.3);
    border: none;
    height: 0%;
    cursor: pointer;
`

const Tags = () => {
    return <TagContainer>
        <TextoTag>Busque por Tags:</TextoTag>
        {tags.map(tag => <BotaoTag key={tag.id}>{tag.titulo}</BotaoTag>)}
    </TagContainer>
}

export default Tags;