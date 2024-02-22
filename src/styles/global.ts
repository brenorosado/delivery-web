import { createGlobalStyle } from "styled-components";

export const theme = {
	colors: {
        white: "#FFFFFF",
        navyBlue: "#05445E",
        grottoBlue: "#189AB4",
        greenBlue: "#75E6DA",
        babyBlue: "#D4F1F4",
    },
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        ::-webkit-scrollbar {
            width: 6px;
        }

        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
            background: #888;
        }

        
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    }

    body {
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
        background: ${theme.colors.white};
        font-family:'Poppins', sans-serif;
    }
    
    :root {
        font-family: 'Inter';
    }
`;
