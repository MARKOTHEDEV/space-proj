import { useMediaQuery } from 'react-responsive'
import GeneralTheme from "../../theme/GeneralTheme/GeneralTheme"
import PageNotification from "../../Components/Notification/Notification";
import { FlexTwoItems, PlanetPic, PlanetPicContainer } from "../Destination/Destination.style";
import WierdRaisingHandMan from "../../assets/image/crew/image-douglas-hurley.png";
import Line from "../../Components/Line";
import {
    TabBallNav,TabBallContainer,TabBall,
    CrewMemberGenralContainer,CrewMemberStatus,CrewMemberName,
    CrewMemberAbout,MemberContentContainer

} from "./Crew.style"
const Crew:React.FC =(prop)=>{

    const isNotPhone = useMediaQuery({
        query: '(min-width: 400px)'
      })

    return (
        <GeneralTheme>


        <PageNotification 
        count={"02"}
        title={"MEET YOUR CREW"}
        />
    <br />
    
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

       <CrewMemberGenralContainer>
           <TabBallContainer>
               <TabBallNav>
                <TabBall />
                <TabBall />
                <TabBall />
                <TabBall />
               </TabBallNav>
           </TabBallContainer>

           <MemberContentContainer>
               <CrewMemberStatus>COMMANDER</CrewMemberStatus>
               
               <CrewMemberName>DOUGLAS HURLEY</CrewMemberName>

               <CrewMemberAbout>
               Douglas  Gerald Hurley is an American engineer, former Marine Corp pilot and former Nasa Astronaut. He launched into space for the third time as a commander of Crew Dragon Demo-2.
               </CrewMemberAbout>
           </MemberContentContainer>


       </CrewMemberGenralContainer>
    </FlexTwoItems>
                
    
    
               
    
               
    
               
            </GeneralTheme>
    )
}

export default Crew