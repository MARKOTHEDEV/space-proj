import styled from "styled-components";

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
interface TabComponentNav{
    CurrentTab:number;
}
export const TabComponentNav = styled.div<TabComponentNav>`
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
/* this the one responsible for allowing the tab Nav Higlight stay without removing
 */
    p:nth-child(
        ${(props)=>props.CurrentTab}
    )::after{
        background-color: ${({theme})=>theme.textColor.whiteColor};

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