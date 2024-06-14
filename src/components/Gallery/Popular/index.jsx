import Title from "../../Title"
import popular from "./fotos-populares.json"
import styled from "styled-components"

const StylizedPopular = styled.div `
    display:flex;
    flex-direction:column;
    box-sizing: border-box;
    text-align:center;


    & > button {
        border-radius:16px;
        background-color:transparent;
        padding: 16px 24px;
        color:#fff;
        border:2px solid #C98CF1;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;

    }
`
const StylizedPopularImage = styled.img `
    margin-bottom:24px;
    width:210px;
    border-radius:16px;
    padding:0;
`
const Popular = () => {
    return (
        <StylizedPopular>
            <Title $align='center'>Populares</Title>
            {popular.map(p => <StylizedPopularImage key={p.id} alt={p.alt} src={p.path} />)}
            <button>Ver mais</button>
        </StylizedPopular>
       
    )
}

export default Popular;