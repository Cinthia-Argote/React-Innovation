import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
    }
    *,*:after,*:before{
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    ul{
        list-style:none
    }
`;
