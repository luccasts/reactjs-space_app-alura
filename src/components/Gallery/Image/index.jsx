import favorite from '../../../../public/icones/favorito.png'
import expand from '../../../../public/icones/expandir.png'
import styled from 'styled-components'

const StylizedFigure = styled.figure`
    width: ${(props) => (props.$expanded ? '90%' : '460px')};
    margin:0;
    display:flex;
    flex-direction:column;
    color:#fff;
    
    & > img{   
        min-height: 256px;
        border-radius:20px 20px 0px 0px ;
    }
    h3{
        margin:0;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
    

    }
`
const SylizedFooter = styled.footer `
    display:flex;
    justify-content:space-between;
    p{
        font-size: 16px;
        font-weight: 400;
        line-height: 19.2px;
        margin:0;
    }
    button{
        background-color:transparent;
        border:none;
    }
       
`

const StylizedFigCaption = styled.figcaption`
    background-color:#001634;
    border-radius:0px 0px 20px 20px;
    display:flex;
    flex-direction:column;
    padding:20px 10px 10px 20px;
`

const StylizedButton = styled.div`
    display:flex;
    gap:8px;
`

const Image = ({photos, expanded = false, onChangeZoomRequested}) => {

    return (
        <StylizedFigure $expanded={expanded}>
            <img src={photos.path}  alt="photo"/>
            <StylizedFigCaption>
                <h3>{photos.titulo}</h3>
                <SylizedFooter>
                    <p>{photos.fonte}</p>
                    <StylizedButton>
                        <button><img src={favorite} alt="Imagem de um ícone de coração"/></button>
                        <button onClick={() => onChangeZoomRequested(photos)}><img src={expand} alt="Imagem de um ícone de expandir"/></button>
                    </StylizedButton>
                </SylizedFooter>
            </StylizedFigCaption>
        </StylizedFigure>
    )

}
export default Image