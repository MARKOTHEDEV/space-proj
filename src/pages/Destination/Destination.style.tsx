import styled from "styled-components";



export const DestinationBox = styled.div`
    @media screen and (min-width: 800px){
            margin:  0 auto;
            /* border: 1px solid red; */
            width: 90%;
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
    /* border: 1px solid blue; */
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




export const DestinationExtraConentInfo = styled.div`
padding-top:1rem;
/* border: 1px solid red; */
width: 100%;

p{
    width: 100%;
}
p:nth-child(2){
color:${({theme})=>theme.textColor.whiteColor};
font-size: ${({theme})=>theme.fontSize.largeScreens.subHeading["x-large"]};
padding: .4rem 0;
width: 100%;

}

@media screen and (min-width:850px) {
    width: 48%;
    /* flex-wrap: wrap; */
}


/* border: 1px solid red; */

`