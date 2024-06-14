import styled from 'styled-components';
import tags from './tags.json'

const StylizedTags = styled.div`
    display:flex;
    gap:24px;
    
    button {
        font-size: 24px;
        color: #FFFFFF;
        background: rgba(217, 217, 217, 0.3);
        border-radius: 10px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        padding: 12px;
        box-sizing: border-box;
        border: 2px solid transparent;
        &:hover {
            border-color: #C98CF1;
        }

    }

`

const ContainerTags = styled.div`
    display:flex;
    gap:32px;
    align-items:center;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 400;
    line-height: 28.8px;

`


const Tags = ( {handleCategory}) => {
    return (
        <ContainerTags>
            <p>Busque por tags:</p>
            <StylizedTags>
                {tags.map(tag => <button onClick={() => handleCategory(tag.id)} key={tag.id}>{tag.titulo}</button>)}
            </StylizedTags>
        </ContainerTags>
    )
}

export default Tags;