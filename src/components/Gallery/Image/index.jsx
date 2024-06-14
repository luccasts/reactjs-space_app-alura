
import expand from '../../../../public/icones/expandir.png'
import styled from 'styled-components'

const StylizedFigure = styled.figure`
    width: ${(props) => (props.$expanded ? '100%' : '460px')};
    margin:0;
    display:flex;
    flex-direction:column;
    color:#fff;
    
    & > img{   
        height:${(props) => (props.$expanded ? '100%' : '256px')};
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

const Image = ({photo, expanded = false, onChangeZoomRequested, onChangeFavorite}) => {
    const favoriteIcone = photo.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png';   

    return (
        <StylizedFigure $expanded={expanded}>
            <img src={photo.path}  alt="photo"/>
            <StylizedFigCaption>
                <h3>{photo.titulo}</h3>
                <SylizedFooter>
                    <p>{photo.fonte}</p>
                    <StylizedButton>
                       
                        <button onClick={() => onChangeFavorite(photo)}><img src={favoriteIcone} alt="Imagem de um ícone de coração"/></button>
                        { expanded ? "" :<button onClick={() => onChangeZoomRequested(photo)}><img src={expand} alt="Imagem de um ícone de expandir"/></button>}
                    </StylizedButton>
                </SylizedFooter>
            </StylizedFigCaption>
        </StylizedFigure>
    )

}
export default Image