import styled from "styled-components";





export const MainNavContainer = styled.div`
padding: .8rem 1rem;
display:flex;
justify-content: space-around;
justify-content: space-between;
align-items: center;
`


export const LogoContainer = styled.div`

    
img{
    width: 90%;
    height: 100%;
}

`

export const HamBurgerMenuStyle =styled.div`
color:#ffffff;
font-size: 30px;
cursor: pointer;
font-weight: 100;
`



export  const NavLinks = styled.ul`
    list-style-type: none;
    border: 1px solid red;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
   width: 65%;
/* From https://css.glass */
background: rgba(237, 228, 228, 0.67);
/* border-radius: 16px; */
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(237, 228, 228, 0.07);
`
export  const NavLink = styled.li`

`