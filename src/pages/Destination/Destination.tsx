import GeneralTheme from "../../theme/GeneralTheme/GeneralTheme"
import {
    Notification,NotificationTitle,
    FlexTwoItems,PlanetPic,PlanetPicContainer,
    TabComponentContainer,TabComponentNav,TabComponentContentContainer,
    DestinationExtraConentInfo,
    PThatHastheMainContentInTabComponentContentContainer,DestinationBox
    } from "./Destination.style"
import PlanetImage from "../../assets/image/destination/image-titan.png";
import Line from "../../Components/Line";

const  Destination= ()=>{


    return (

        <GeneralTheme>
<DestinationBox>
<Notification>
                    <NotificationTitle>
                        <span>01</span>
                        <span>PICK YOUR DESTINATION</span>
            </NotificationTitle>

            
            </Notification> 


            <FlexTwoItems 
            flexAtWhatpx={800}
            widthInPercent={100}
            spaceAround={true}
            isCenter={true}
            
            >
                <PlanetPicContainer>
                        <PlanetPic src={PlanetImage} />
                </PlanetPicContainer>

                <TabComponentContainer>
                    <TabComponentNav>
                        <p>Moon</p>
                        <p>Mars</p>
                        <p>Europa</p>
                        <p>Titan</p>
                    </TabComponentNav>

                    <TabComponentContentContainer>
                        <h2>TITAN</h2>
                        {/* <br /> */}
                        <PThatHastheMainContentInTabComponentContentContainer>
The only moon Known to have a dence atmosphere other than
 Earth,Titan is a home
away from home(just a few hundred degrees colder!).
 As a bonus,you get striking views of the
Ring of Saturn
                        </PThatHastheMainContentInTabComponentContentContainer>

                <Line  marginBottom="1rem"/>

                    <FlexTwoItems flexAtWhatpx={834}
                    widthInPercent={60}
                    isCenter={true}>
                        <DestinationExtraConentInfo>
                            <p><small>AVG. DISTANCE</small></p>
                            <p>1.6 BIL. KM</p>
                        </DestinationExtraConentInfo>

                        <DestinationExtraConentInfo>
                            <p><small>EST. TRAVEL TIME</small></p>
                            <p>7 YEARS</p>
                        </DestinationExtraConentInfo>
                    </FlexTwoItems>
                    </TabComponentContentContainer>



                </TabComponentContainer>


            </FlexTwoItems>
</DestinationBox>
           
        </GeneralTheme>
    )
}

export default Destination