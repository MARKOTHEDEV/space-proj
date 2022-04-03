


const Line:React.FC<{
    width?:string;height?:string
    marginTop?:string;
    marginBottom?:string;
}> =({
    width="80%",
    height="1px",
    marginTop="0",
    marginBottom="0",
})=>{


    return <div style={{
        "backgroundColor":"#d0d6f922",
        "height":height,
        "width":width,
        // "marginTop":".9rem",
        "margin":"0 auto",
        marginBottom,
        marginTop
    }}>

    </div>
}

export default Line