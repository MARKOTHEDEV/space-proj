import { useMediaQuery } from 'react-responsive'
import GeneralTheme from "../../theme/GeneralTheme/GeneralTheme"
import PageNotification from "../../Components/Notification/Notification";
import { FlexTwoItems, PlanetPic, PlanetPicContainer } from "../Destination/Destination.style";
import WierdRaisingHandMan from "../../assets/image/crew/image-douglas-hurley.png";
import TabletWierdRaisingHandMan from "../../assets/image/crew/image-douglas-hurley.webp";
import Line from "../../Components/Line";
import {
    TabBallNav,TabBallContainer,TabBall,
    CrewMemberGenralContainer,CrewMemberStatus,CrewMemberName,
    CrewMemberAbout,MemberContentContainer,CrewImageContainer

} from "./Crew.style"
const Crew:React.FC =(prop)=>{

    const isTablet = useMediaQuery({
        query: '(min-width: 600px)'
      })


      const isLaptopAt900 = useMediaQuery({
        query: '(min-width: 900px)'
      })

    return (
        <GeneralTheme>


        <PageNotification 
        count={"02"}
        title={"MEET YOUR CREW"}
        />
    <br />
    
    <FlexTwoItems 
           widthInPercent={100}
           spaceAround={false}
           isCenter={false}
           isReverseColomn={isTablet?true:false}
           flexAtWhatpx={900}
           isReverseRow={isLaptopAt900?true:false}
    >
           {!isTablet &&  
           
                <div >
                    <PlanetPicContainer>
                        <PlanetPic 
                        src={WierdRaisingHandMan}
                        // src={?TabletWierdRaisingHandMan:WierdRaisingHandMan}
                        />
                    </PlanetPicContainer>
                    <Line  marginBottom="1rem"
                    marginTop="-4px"
                    width="90%"/>
                    
                </div>
        }

        {   isTablet &&
       
            <CrewImageContainer>
                <img src={WierdRaisingHandMan} alt="" />
            </CrewImageContainer>
            }
        

       <CrewMemberGenralContainer>
           <FlexTwoItems
             widthInPercent={100}
             spaceAround={false}
             isCenter={false}
             isReverseColomn={isTablet?true:false}
           >
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
           </FlexTwoItems>

       </CrewMemberGenralContainer>
    </FlexTwoItems>
 
 </GeneralTheme>
    )
}

export default Crew