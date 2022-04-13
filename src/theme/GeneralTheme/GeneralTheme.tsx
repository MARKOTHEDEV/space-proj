import Nav from "../../Components/Nav/Nav"
import {GeneralThemeBackground,GeneralThemeBackgroundBox} from "./GeneralTheme.style"



const GeneralTheme:React.FC<{

}>=(props)=>{



    return (
        <GeneralThemeBackground>
        <Nav />

<br />

<GeneralThemeBackgroundBox >
        {
            props.children
        }

</GeneralThemeBackgroundBox>
        
        </GeneralThemeBackground>
    )
}

export default GeneralTheme