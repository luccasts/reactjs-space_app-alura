import styled from "styled-components";

const StylizedTextField = styled.div`
    input {
        border: 2px solid;
        border-color: #C98CF1;
        border-radius:10px;
        min-width: 566px;

        box-sizing: border-box;
        
        background-color:transparent;  
        background-image:url('/images/search.png');
        background-repeat:no-repeat;
        background-position:right;
        padding:12px 16px 12px 16px;

        

        color: #D9D9D9;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        
    }

`

const TextField = () => {
    return (
        <StylizedTextField>
            <input placeholder="O que você procura?" alt="search" type="text"/>
        </StylizedTextField>
    )
}

export default TextField;