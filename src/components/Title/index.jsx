import styled from "styled-components";

const Title = styled.h2 `
    font-size:32px;
    text-align: ${props => props.$align ? props.$alaign : 'left'};
    color:#7B78E6;

`

export default Title;