import { useState } from "react";
import {
    TabComponentContainer,TabComponentNav,TabComponentContentContainer,
    PThatHastheMainContentInTabComponentContentContainer,
} from "./DesitinationTab.style";
import {
    FlexTwoItems,DestinationExtraConentInfo,PlanetPic,PlanetPicContainer,
} from "./Destination.style";
import Line from "../../Components/Line";
import titanImage from "../../assets/image/destination/image-titan.png";
import moonImage from "../../assets/image/destination/image-moon.png";
import marsImage from "../../assets/image/destination/image-mars.png";
import europaImage from "../../assets/image/destination/image-europa.png";


interface DestinationTab{
    nav:string;
    body:string;
    avg_distance:string;
    travel_time:string;
}

const DestinationTab=({tabContent}:{tabContent:DestinationTab[]})=>{

    const [currentTab,setCurrentTab]=useState<number>(1);


    return(
        

<FlexTwoItems 
            flexAtWhatpx={800}
            widthInPercent={100}
            spaceAround={true}
            isCenter={true}
            
            >
                <PlanetPicContainer>
                        <PlanetPic src={
                            (currentTab===1)?
                            moonImage:
                            (currentTab===2)?marsImage:
                            (currentTab===3)?europaImage:titanImage
                        } />
                </PlanetPicContainer>




        <TabComponentContainer>
                    <TabComponentNav CurrentTab={currentTab}>
                        {
                            tabContent.map((data:DestinationTab,index)=>(
                                
                                <p onClick={(e)=>setCurrentTab(index+1)}>{data.nav}</p>
                            ))
                        }
                        {/* <p  onClick={(e)=>setCurrentTab(2)}>Mars</p>
                        <p onClick={(e)=>setCurrentTab(3)}>Europa</p>
                        <p onClick={(e)=>setCurrentTab(4)}>Titan</p> */}
                    </TabComponentNav>

                    <TabComponentContentContainer>
                        <h2>
                        {
                            tabContent[currentTab-1]["nav"]
                        }
                        </h2>
                        {/* <br /> */}
                        <PThatHastheMainContentInTabComponentContentContainer>
                        {
                            tabContent[currentTab-1]["body"]
                        }
                        </PThatHastheMainContentInTabComponentContentContainer>

                <Line  marginBottom="1rem"/>

                    <FlexTwoItems 
                    flexAtWhatpx={834}
                    widthInPercent={60}
                    isCenter={true}>
                        <DestinationExtraConentInfo>
                            <p><small>AVG. DISTANCE</small></p>
                            <p>
                                 {
                            tabContent[currentTab-1]["avg_distance"]
                        }
                            </p>
                        </DestinationExtraConentInfo>

                        <DestinationExtraConentInfo>
                            <p><small>EST. TRAVEL TIME</small></p>
                            <p>
                            {
                            tabContent[currentTab-1]["travel_time"]
                        }
                            </p>
                        </DestinationExtraConentInfo>
                    </FlexTwoItems>
                    </TabComponentContentContainer>



                </TabComponentContainer>
    </FlexTwoItems>
    )
}

export default DestinationTab