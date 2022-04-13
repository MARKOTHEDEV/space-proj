import styled from "styled-components"



export const GeneralThemeBackground =styled.div`

background-color: ${({theme})=>theme.color.dark};
height: 100vh;
/* height: 120%; */

@media screen and (min-width:600px){
height: 120vh;
}
`


export const GeneralThemeBackgroundBox = styled.div`
    @media screen and (min-width: 800px){
            margin:  0 auto;
            /* border: 1px solid red; */
            width: 90%;
    }
`