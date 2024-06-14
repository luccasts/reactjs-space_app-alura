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
const Header = ({handleSearch}) => {
    return (
    <StylizedHeader>
        <img src="/images/logo.png" alt="Imagem do logo do site"/>
        <TextField handleSearch={(search) => handleSearch(search)}/>
    </StylizedHeader>
)
}

export default Header;