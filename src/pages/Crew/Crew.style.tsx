import styled from "styled-components"


interface TabBallType{
    CurrentTab:number;
}

export const CrewMemberGenralContainer = styled.div`


@media screen and (min-width:1000px){
    margin-left: 80px;
}
`
export const MemberContentContainer = styled.div`
    text-align: center;
    /* color: red; */
    color: white;

`


export const TabBallContainer = styled.div`
@media screen and (min-width: 600px){
        /* border: 1px solid red; */

        padding: 2.5rem 0;
    }
`

export const TabBallNav = styled.div`
    /* border: 1px solid yellow; */
    width: 20%;
display: flex;
justify-content: space-between;
margin: 0 auto ;
/* margin-left: 100px; */

@media screen and (min-width: 600px){
        /* border: 1px solid red; */
        width: 70px;
    }

    @media screen and (min-width: 900px){
        margin: 0;
    }
`




export const TabBall = styled.div<TabBallType>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #35373f;

    transition: background-color .3s ease-in-out;

&:hover{
    cursor: pointer;
    background-color: #ffffff7b;
    /* background-color: #ffffff; */
}
&:nth-child(
        ${(props)=>props.CurrentTab}
        ){
        background-color: ${({theme})=>theme.textColor.whiteColor};

    }
`




export const CrewMemberStatus = styled.div`
   color: #75767d;
   font-weight: 550;
   text-align: center;
   padding-top:.8rem;
   @media screen and (min-width: 600px) {
    font-size: 1.2rem;
    }

    @media screen and (min-width: 900px) {
    text-align: left;
    font-size: 2rem;

        
    }
`



export const CrewMemberName = styled.p`
    font-size: 25px;
    padding: .1rem 0;
    color: ${({theme})=>theme.textColor.whiteColor};
    @media screen and (min-width: 600px) {
    font-size: 29px;
        
    }
    @media screen and (min-width: 900px) {
    text-align: left;
    font-size: 56px;
        
    }
`



export const CrewMemberAbout = styled.p`
 padding: 0 2rem ;
 color: ${({theme})=>theme.textColor.slightDarkLightBlue};

 @media screen and (min-width: 600px) {
     width: 60%;
     margin:  0 auto;
     padding-top: .8rem;
 }

 
 @media screen and (min-width: 900px){
     margin: 0;
     text-align: left;
     width: 50%;
     padding: 0;
 }
`


export const CrewImageContainer=styled.div`
 /* border:1px solid red; */
 height: 50%;
 width: 50%;
    margin: 0 auto;
    /* margin-top: 90px; */
    /* tran */
 img{
    height: 100%;
    width: 100%;
 }

`