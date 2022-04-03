import styled from "styled-components";



// const 1

export const Notification = styled.div`
/* border: 1px solid red; */

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

`
export const FlexTwoItems = styled.div``
// export const FlexTwoItems = styled.div``
export const PlanetPicContainer = styled.div`
width: 50%;
height: 50%;
margin: 0 auto;
margin-top: 1rem;
/* border: 1px solid wheat; */
`
export const PlanetPic = styled.img`
width: 100%;
height: 100%;

`



export const TabComponentContainer = styled.div`
color:${({theme})=>theme.textColor.slightDarkLightBlue};
/* border:1px solid red; */
`
export const TabComponentNav = styled.div`
/* border:1px solid green; */
display: flex;
justify-content: space-between;
justify-content: space-around;
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


`
export const DestinationExtraConentInfo = styled.div`


p:nth-child(2){
color:${({theme})=>theme.textColor.whiteColor};
font-size: ${({theme})=>theme.fontSize.largeScreens.subHeading["x-large"]};
padding: .4rem 0;
}

`