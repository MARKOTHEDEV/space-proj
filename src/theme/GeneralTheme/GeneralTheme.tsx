import Nav from "../../Components/Nav/Nav"
import {GeneralThemeBackground} from "./GeneralTheme.style"



const GeneralTheme:React.FC<{

}>=(props)=>{



    return (
        <GeneralThemeBackground>
        <Nav />

<br />
        {
            props.children
        }
        
        </GeneralThemeBackground>
    )
}

export default GeneralTheme