import GeneralTheme from "../../theme/GeneralTheme/GeneralTheme"
import {
    Notification,NotificationTitle,
    FlexTwoItems,PlanetPic,PlanetPicContainer,
    TabComponentContainer,TabComponentNav,TabComponentContentContainer,
    DestinationExtraConentInfo
    } from "./Destination.style"
import PlanetImage from "../../assets/image/destination/image-titan.png";
import Line from "../../Components/Line";

const  Destination= ()=>{


    return (

        <GeneralTheme>

           <Notification>
                    <NotificationTitle>
                        <span>01</span>
                        <span>PICK YOUR DESTINATION</span>
            </NotificationTitle>

            
            </Notification> 


            <FlexTwoItems>
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
                        <p>The only moon Known to have a dence atmosphere other than Earth,Titan is a home
                            away from home(just a few hundred degrees colder!). As a bonus,you get striking views of the
                            Ring of Saturn
                        </p>

                <Line  marginBottom="1rem"/>

                    <FlexTwoItems>
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
        </GeneralTheme>
    )
}

export default Destination