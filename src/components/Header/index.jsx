import styled from "styled-components";
import TextField from "../TextField";

const StylizedHeader = styled.header`
    padding:60px;
    display:flex;
    justify-content:space-between;
    img{
        max-width:212px;
    }
`
const Header = () => {
    return (
    <StylizedHeader>
        <img src="/images/logo.png" alt="Imagem do logo do site"/>
        <TextField />
    </StylizedHeader>
)
}

export default Header;