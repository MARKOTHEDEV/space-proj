import styled from "styled-components"

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
