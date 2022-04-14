import GeneralTheme from "../../theme/GeneralTheme/GeneralTheme"
import PageNotification from "../../Components/Notification/Notification";
import { FlexTwoItems, PlanetPic, PlanetPicContainer } from "../Destination/Destination.style";
import WierdRaisingHandMan from "../../assets/image/crew/image-douglas-hurley.png";

import Line from "../../Components/Line";

const Crew:React.FC =(prop)=>{



    return (
        <GeneralTheme>


        <PageNotification 
        count={"02"}
        title={"MEET YOUR CREW"}
        />
    
    
    <FlexTwoItems 
           flexAtWhatpx={800}
           widthInPercent={100}
           spaceAround={true}
           isCenter={true}
    >
       <div >
       <PlanetPicContainer>
            <PlanetPic 
            src={WierdRaisingHandMan}
            />
        </PlanetPicContainer>
        <Line  marginBottom="1rem"
        marginTop="-4px"
        width="90%"/>
        
       </div>
    </FlexTwoItems>
                
    
    
               
    
               
    
               
            </GeneralTheme>
    )
}

export default Crew