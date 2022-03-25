import styled from "styled-components";
import DesktopHeroImage from "../../assets/image/home/background-home-desktop.jpg";
import MobileHeroImage from "../../assets/image/home/background-home-mobile.jpg";
import TabletHeroImage from "../../assets/image/home/background-home-tablet.jpg";



export const HeroImageBackground = styled.div`
    border: 1px solid red;
    height: 100vh;
    /* width: 100vw; */
    background-repeat:  no-repeat;
    background-position:center;
    background-size: cover;
    background: url(${TabletHeroImage}) no-repeat ;
    @media screen  and (min-width:400px){
        background: url(${TabletHeroImage}) no-repeat ;
        
    }
    @media screen  and (min-width:800px){
    background: url(${DesktopHeroImage})  ;
    height: 120vh;
        
    }
`

export const HeroContainer = styled.div`
display: flex;
flex-direction: column;
justify-content:space-between;
/* align-content: center; */
margin-top: 25%;
border: 1px solid yellow;
height: 60%;
padding:1rem 0;

@media screen  and (min-width:900px){
    flex-direction: row;
    align-items: center;
    height: unset;
    max-width:1000px ;
    margin:0 auto ;
    height: 80%;
}
`
export const HeroContentContainer = styled.div`

text-align: center;
font-size: 17px;
padding:1.4rem 1.5rem;
/* border:1px solid red; */
p{
    color:${({theme})=>"#D0D6F9"}
} 
@media screen  and (min-width:600px){
    font-size: 20px;
    max-width: 600px;
    margin: 0 auto;
}

@media screen  and (min-width:900px){
    margin: unset;
    text-align: left;
    /* border: 1px solid red; */
    width: 50%;
}
`
export const HeroHeadingText = styled.div`
font-size: 60px;
color:${({theme})=>theme.textColor.whiteColor};
padding:1rem .2rem;

@media screen  and (min-width:600px){
    font-size: 100px;
}

@media screen  and (min-width:900px){
    font-size: 150px;
    text-align: left;
    /* padding:1rem unset ; */
}
`

export const RoundExplore = styled.div`
color:${({theme})=>theme.textColor.darkColor};
background-color:${({theme})=>theme.textColor.whiteColor};
width: 150px;
height: 150px;
display: flex;
align-items:center;
text-align: center;
justify-content:center ;
border-radius: 50%;
margin: 0 auto ;
cursor: pointer;
/* position: relative; */
/* z-index:1000000; */

/* &::after{
content: "";
position: absolute;
top:0 ;
left:0 ;
width: 250px;
height: 250px;
background-color: red;
border-radius: 50%;

} */

&:hover::after{
transform: scale(2.2);
}
@media screen  and (min-width:900px){
    width: 250px;
height: 250px;  
font-size: 30px;
margin-left:auto ;
/* align-self:left; */
}
`

export const RoundExploreContainer=styled.div`

`