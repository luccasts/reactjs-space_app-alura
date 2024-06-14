import styled from "styled-components";
import icons from "./icones-sociais.json"
const StylizedFooter = styled.footer`
    background-color: #04244F;
    height:80px;
    box-sizing:border-box;
    color:white;
    section {
        display:flex;
        justify-content:space-between;
        align-items:center;
        height:80px;
        padding:0 30px;
    }
    h4{
        order:2;
    }
`

const ContainerImage = styled.div`
    display:flex;
    gap:16px;
    order:1;
    max-height:35px;

    img {
        max-height:35px;
    }
   
`

const Footer = () => {
    return (
        <StylizedFooter>
            <section>
                <h4>Desenvolvido por Lucas Teixeira</h4>
                <ContainerImage>
                    {icons.map(icon => <a key={icon.id} href={icon.url}><img alt={icon.alt}  src={icon.path}/> </a>)}
                </ContainerImage>
            </section>
        </StylizedFooter>
    )
}
export default Footer;