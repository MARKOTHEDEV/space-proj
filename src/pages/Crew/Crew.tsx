import { useMediaQuery } from 'react-responsive'
import { useState } from 'react';
import GeneralTheme from "../../theme/GeneralTheme/GeneralTheme"
import PageNotification from "../../Components/Notification/Notification";
import { FlexTwoItems, PlanetPic, PlanetPicContainer } from "../Destination/Destination.style";
import douglas from "../../assets/image/crew/image-douglas-hurley.png";
import shuttleworth from "../../assets/image/crew/image-mark-shuttleworth.png";
import victor from "../../assets/image/crew/image-victor-glover.png";
import ansari from "../../assets/image/crew/image-anousheh-ansari.png";
import Line from "../../Components/Line";
import {
    TabBallNav,TabBallContainer,TabBall,
    CrewMemberGenralContainer,CrewMemberStatus,CrewMemberName,
    CrewMemberAbout,MemberContentContainer,CrewImageContainer

} from "./Crew.style"
const crews =[
    {
        "name": "Douglas Hurley",
        "images": {
          "png":douglas,
        },
        "role": "Commander",
        "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
      },
      {
        "name": "Mark Shuttleworth",
        "images": {
          "png":shuttleworth,
          "webp": "../../assets/image/crew/image-mark-shuttleworth.webp"
        },
        "role": "Mission Specialist",
        "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
      },
      {
        "name": "Victor Glover",
        "images": {
          "png": victor,
          "webp": "../../assets/image/crew/image-victor-glover.webp"
        },
        "role": "Pilot",
        "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
      },
      {
        "name": "Anousheh Ansari",
        "images": {
          "png":ansari,
          "webp": "../../assets/image/crew/image-anousheh-ansari.webp"
        },
        "role": "Flight Engineer",
        "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
      }
]


const Crew:React.FC =(prop)=>{

    const isTablet = useMediaQuery({
        query: '(min-width: 600px)'
      })


      const isLaptopAt900 = useMediaQuery({
        query: '(min-width: 900px)'
      })
      const [currentTab,setCurrentTab]=useState<number>(1);
      const currentCrew = crews[currentTab-1]
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
                        src={currentCrew.images.png}
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
                <img src={currentCrew.images.png} alt="" />
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
                {/* <TabBall />
                <TabBall />
                <TabBall />
                <TabBall /> */}
               { [...new Array(4)].map((data,index)=>(
                   <TabBall  CurrentTab={currentTab} onClick={(e)=>setCurrentTab(index+1)}/>
               ))}
               </TabBallNav>
           </TabBallContainer>

           <MemberContentContainer>
               <CrewMemberStatus>{currentCrew.role}</CrewMemberStatus>
               
               <CrewMemberName>{currentCrew.name}</CrewMemberName>

               <CrewMemberAbout>
                {currentCrew.bio}
               </CrewMemberAbout>
           </MemberContentContainer>
           </FlexTwoItems>

       </CrewMemberGenralContainer>
    </FlexTwoItems>
 
 </GeneralTheme>
    )
}

export default Crew