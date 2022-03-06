import styled from "styled-components";





export const MainNavContainer = styled.div`
padding: .8rem 1rem;
display:flex;
justify-content: space-around;
justify-content: space-between;
align-items: center;
position: relative;
`



export const LogoContainer = styled.div`

    
img{
    width: 90%;
    height: 100%;
}

`

export const HamBurgerMenuStyle =styled.div`
position: absolute;
top:12px;
right:10px;

color:#D0D6F9;
font-size: 30px;
cursor: pointer;
font-weight: 100;
z-index: 800px;
`

interface NavLinksContainerType{
    showPhoneNav:boolean
}

export  const NavLinksContainer = styled.ul`
/* display: none; */
    list-style-type: none;
    /* border: 1px solid red; */
    transform: ${(props:NavLinksContainerType)=>props.showPhoneNav?"translateX(0)":"translateX(100%)"};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 65%;
    transition: transform 1s ease-in-out;
    backdrop-filter: blur(10px) ;
    background-color: rgba(255, 255, 255, 0.068);
    
`
export  const NavLink = styled.li`

    text-decoration: none;
    /* border: 1px solid red; */


    &:first-child{
        /* border:  1px solid yellow; */
        margin-top: 90px;
    }
a{
  padding: .7rem 1.2rem;
  cursor: pointer;
  display:inline-block;
  color: #FFFFFF;
  word-spacing: 2px;
  /* font-weight: 28px; */
  text-decoration: transparent;
  font-size: 16px;
  text-transform:uppercase ;

}

span{
    font-weight: 700;
    word-spacing: -2px;
  font-size: 15px;

}
`