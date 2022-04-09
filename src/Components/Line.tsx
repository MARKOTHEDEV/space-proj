import styled from "styled-components";


interface LineType{
    width?:string;height?:string
    marginTop?:string;
    marginBottom?:string;
}
const LineStyle = styled.div<LineType>`
background-color:#d0d6f922;
height:${(props)=>props.height?props.height: "1px"};
width:${(props)=>props.width?props.width:"80%"};
margin:0 auto;
margin-bottom: ${(props)=>props.marginBottom?props.marginBottom:"0"};
margin-top:  ${(props)=>props.marginTop?props.marginTop:"0"};

@media screen and (min-width: 800px){
margin:0 ;
width: 70%;
    
}
` 

// const Line =({
//     width="80%",
//     height="1px",
//     marginTop="0",
//     marginBottom="0",
// })=>{


//     return <div style={{
//         "backgroundColor":"#d0d6f922",
//         "height":height,
//         "width":width,
//         // "marginTop":".9rem",
//         "margin":"0 auto",
//         marginBottom,
//         marginTop
//     }}>

//     </div>
// }

export default LineStyle