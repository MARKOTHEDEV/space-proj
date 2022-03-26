import styled from "styled-components";

import { BlurBackGround } from "../Mixins";



export const MainNavContainer = styled.div`
padding: .8rem 1rem;
display:flex;
justify-content: space-around;
justify-content: space-between;
align-items: center;
position: relative;
z-index: 10;
@media screen and (min-width:600px) {
    &{
        padding-right: 0;
    }
}
`



export const LogoContainer = styled.div`

    
img{
    width: 90%;
    height: 100%;
}


@media screen  and (min-width:600px){
    img{
        width: 100%;
    }
    padding-left: 50px;
}

@media screen  and (min-width:900px){
    &::after{
        content: "";
        top: 50%;
        /* left: 0; */
        transform:translateX(30px) ;
        width: 43%;
        height: 2px;
        position:absolute ;

        backdrop-filter: blur(10px) ;
    background-color: rgba(255, 255, 255, 0.068);
    
        z-index: 1000;
        


    }
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

@media screen  and (min-width:600px){
    &{
        display: none;
    }
}
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
    ${BlurBackGround()}
    
    @media screen  and (min-width:600px){
    
        position: relative;
        left:0 ;
        top: 0;
        transform:unset;
        height: unset;
        display:flex ;
        width: unset;
        padding: 1.2rem 0;
    
    
}

@media screen  and (min-width:1200px){
    width: 50%;
    align-items: flex-end;
    /* border:1px solid red ; */
}


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

@media screen  and (min-width:600px){
    
    &:first-child{
        /* border:  1px solid yellow; */
        margin-top: 0;
    }
    span{
        display: none;
    }
    a{
        position: relative;
    }
    /* a:hover */
     a::after{
        content: "";
        position: absolute;
        left: 50%;
        width: 40%;
        height: 8%;
        bottom: -45%;
        transform: translate(-50%, -50%);
        /* border: 1px solid red; */
        background-color:transparent;
        transition:   background-color .4s ease-in-out;
    }
    a:hover::after{
        background-color: ${({theme})=>theme.textColor.whiteColor};
    }


}


@media screen  and (min-width:900px){
    span{
        display: inline-block;
    }
    &:first-child{
        margin-left: 10%;
    }
}
`