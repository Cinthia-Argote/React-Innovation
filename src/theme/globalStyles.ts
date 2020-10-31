import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap');
    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        background-color: #161619;
        color: gray;
    }
    *,*:after,*:before{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none
    }
    
    /* Let's get this party started */
    ::-webkit-scrollbar {
        width: 12px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        border-radius: 10px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #363646; 
    }
    ::-webkit-scrollbar-thumb:window-inactive {
        background: #363646; 
    }
`;
