import styled from "styled-components";



export const DestinationBox = styled.div`
    @media screen and (min-width: 800px){
            margin:  0 auto;
            /* border: 1px solid red; */
            width: 90%;
    }
`

export const Notification = styled.div`
/* border: 1px solid red; */
@media screen and (min-width: 800px) {
    margin: 2rem auto;
    width: 85%;
    margin-bottom: 3rem;
}

`
export const NotificationTitle = styled.div`
color: ${({theme})=>theme.textColor.whiteColor};
text-align: center;
span:first-child{
        display: inline-block;
       color:${({theme})=>theme.textColor.gray} ;
       margin-right:2px;
       letter-spacing: 3px;
       /* font-size: ${({theme})=>theme.fontSize.largeScreens.heading.small.font}; */
        /* font-size:1rem; */
       /* font-weight: 700; */
}

@media screen and (min-width: 800px) {
    text-align: left;
    font-size: ${({theme})=>theme.fontSize.largeScreens.subHeading["x-large"]};
}

`

interface FlexTwoItemsType{
    "flexAtWhatpx"?:number
    widthInPercent?:number;
    isCenter?:boolean;
    spaceAround?:boolean;
}
export const FlexTwoItems= styled.div<FlexTwoItemsType>`
display: flex;
flex-direction: column;
@media screen and (min-width:${(props)=>props.flexAtWhatpx}px){
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* justify-content: ; */
    /* border: 1px solid red; */
    ${(props)=>props.widthInPercent?`width:${props.widthInPercent}%;`:""}
    ${(props)=>props.isCenter?"margin-left:auto;margin-right:auto;":""}
    ${(props)=>props.spaceAround?
    "justify-content:space-around;":""
    }
}
@media screen and (min-width:1000px){
margin-left: 0;
margin-right: 0;
}
`
// export const FlexTwoItems = styled.div``
export const PlanetPicContainer = styled.div`
width: 50%;
height: 50%;
margin: 0 auto;
margin-top: 1rem;

/* border: 1px solid wheat; */
@media screen and (min-width: 600px){
width: 300px;
height: 300px;
}
@media screen and (min-width: 800px){
    width: 400px;
height: 400px;
margin: 0 ;
/* border: 1px solid red; */
}
`
export const PlanetPic = styled.img`
width: 100%;
height: 100%;

`



export const TabComponentContainer = styled.div`
color:${({theme})=>theme.textColor.slightDarkLightBlue};
/* border:1px solid red; */
/* border:1px solid green; */

@media screen and (min-width: 800px){
    width: 50%;
}

@media screen and (min-width: 900px){
    width: 40%;
}
`
export const TabComponentNav = styled.div`
/* border:1px solid green; */
display: flex;
justify-content: space-between;
width: 80%;
margin: 0 auto ;
margin-bottom: .9rem;
padding: .8rem 0;
text-transform: uppercase;
font-size: ${({theme})=>theme.fontSize.largeScreens.subHeading.NavHeading};
P{
    cursor:pointer;
    position: relative;


}
p::after{
        content: "";
        position: absolute;
        left: 50%;
        width: 80%;
        height: 12%;
        border-radius: 10px;
        bottom: -45%;
        transform: translate(-50%, -50%);
        /* border: 1px solid red; */
        background-color:transparent;
        transition:   background-color .4s ease-in-out;
    }
    p:hover::after{
        background-color: ${({theme})=>theme.textColor.whiteColor};
    }
    p:hover{
        color:${({theme})=>theme.textColor.whiteColor};
    }

    @media screen and (min-width:600px) {
        width: 50%;        
    /* border: 1px solid red; */
    }
    @media screen and (min-width:600px) {
        margin-bottom: 2rem;
        font-size: 14px;
        text-align: left;
    }
    @media screen and (min-width: 900px) {
        width: 45%;
        margin: 0rem;
    }
`
export const TabComponentContentContainer = styled.div`
text-align: center;
h2{
font-size:3rem;
color:${({theme})=>theme.textColor.whiteColor};
}
p{
    width: 80%;
    margin: 0 auto;
    padding-bottom: .3rem;

}
@media screen and (min-width: 800px){

}

@media screen  and (min-width:800px){
    text-align: left;
    h2{
      font-size: ${({theme})=>theme.fontSize.largeScreens
      .heading["large"]};
    }
    p{
        margin: 0;
        width: 53%;
    }
  
}

`
export  const PThatHastheMainContentInTabComponentContentContainer=styled.p`
    margin: 0 auto;
    padding-bottom: .3rem; 
    @media screen  and (min-width:800px){
        width: 65% !important; 
        /* border: 1px solid red; */
        /* margin: 0; */
        padding-bottom: 3rem !important;

}
`
export const DestinationExtraConentInfo = styled.div`
padding-top:1rem;
p{
    width: 100%;
}
p:nth-child(2){
color:${({theme})=>theme.textColor.whiteColor};
font-size: ${({theme})=>theme.fontSize.largeScreens.subHeading["x-large"]};
padding: .4rem 0;
}
`