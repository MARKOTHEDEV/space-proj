import styled from "styled-components"



export const CrewMemberGenralContainer = styled.div`
    /* border: 1px solid red; */
    padding: .8rem 0;

`
export const MemberContentContainer = styled.div`
    text-align: center;
    /* color: red; */
    color: white;

`


export const TabBallContainer = styled.div`
    
`

export const TabBallNav = styled.div`
    /* border: 1px solid yellow; */
    width: 20%;
display: flex;
justify-content: space-between;
margin: 0 auto ;
/* margin-left: 100px; */
`


export const TabBall = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #35373f;

    transition: background-color .3s ease-in-out;

&:hover{
    cursor: pointer;
    background-color: #ffffff;
}
`




export const CrewMemberStatus = styled.div`
   color: #75767d;
   font-weight: 550;
   text-align: center;
   padding-top:.8rem;
`



export const CrewMemberName = styled.p`
    font-size: 25px;
    padding: .3rem 0;
    color: ${({theme})=>theme.textColor.whiteColor};

`



export const CrewMemberAbout = styled.div`
 padding: 0 2rem ;
`


