import styled from "styled-components";
import DesktopHeroImage from "../../assets/image/home/background-home-desktop.jpg";
import MobileHeroImage from "../../assets/image/home/background-home-mobile.jpg";
import TabletHeroImage from "../../assets/image/home/background-home-tablet.jpg";



export const HeroImageBackground = styled.div`
    /* border: 1px solid red; */
    height: 100vh;

    background: url(${MobileHeroImage});


`

export const HeroContainer = styled.div`
display: flex;
flex-direction: column;
justify-content:space-between;
/* border: 1px solid yellow; */
height: 80%;
`
export const HeroContentContainer = styled.div`

text-align: center;
font-size: 15px;
padding:1.4rem 1.5rem;
/* border:1px solid red; */
p{
    color:${({theme})=>"#D0D6F9"}
} 

`
export const HeroHeadingText = styled.div`
font-size: 60px;
color:${({theme})=>theme.textColor.whiteColor};
padding:1rem .2rem;
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
`