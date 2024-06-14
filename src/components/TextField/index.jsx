import styled from "styled-components";
import searchImage from '/images/search.png'
import { useState } from "react";
const StylizedTextField = styled.div`
    position:relative;
    input {
        border: 2px solid;
        border-color: #C98CF1;
        border-radius:10px;
        min-width: 566px;

        box-sizing: border-box;
        padding:12px 16px 12px 16px;

        

        color: #D9D9D9;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        
    }
    button {
        padding:9px;
        position:absolute;
        right:0px;
        top:0px;
        border:none;
        background-color:transparent;
        background-repeat:no-repeat;
        background-position:right;
    }

`

const TextField = ({handleSearch}) => {

    const [inputValue, setInputValue] = useState()

    return (
        <StylizedTextField>
            <input onChange={(v) => setInputValue(v.target.value)} value={inputValue} placeholder="O que você procura?" alt="search" type="text"/>
            <button onClick={() => handleSearch(inputValue)}><img src={searchImage}/></button>
        </StylizedTextField>
    )
}

export default TextField;