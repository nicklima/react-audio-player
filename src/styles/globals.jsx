import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {    
    --font-default: "Quicksand", "sans-serif", "Helvetica";
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
  }

  html {
    scroll-behavior: smooth;
    text-size-adjust: 100%;
  }

  body, input, button{
    -webkit-font-smoothing: antialiased;
  }
 
  body {
    font-size: 16px;
    overflow-x: hidden;
    background: ${({ theme }) => theme.bg};
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: 700;
  }

  .main {
    min-height: 80vh;
    position: relative;
  }

  .container {
    width: 100%;
    max-width: 1120px;
    padding: 0 15px;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
  }
  
  a:visited {
   color: inherit;
  }
`;
