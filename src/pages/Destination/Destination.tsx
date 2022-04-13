import GeneralTheme from "../../theme/GeneralTheme/GeneralTheme"
import {DestinationBox,DestinationExtraConentInfo} from "./Destination.style"
import Line from "../../Components/Line";
import DestinationTab from "./DesitinationTab";
import PageNotification from "../../Components/Notification/Notification";

const  Destination= ()=>{
    const Content = [
        {
            "nav":"Moon",
            "body":`Moon See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
            "avg_distance":" 384,400.km",
            "travel_time":"3 days"
        },

        {
            "nav":"Mars",
            "body":`
            Mars Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
            `,
            "avg_distance":"225 mil.km",
            "travel_time":"9 months"
        },

        
        {
            "nav":"Europa",
            "body":`
            Europa The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin. 
            `,
            "avg_distance":" 628 mil.km ",
            "travel_time":"3 years"
        },


        
        {
            "nav":"Titan",
            "body":`
            The only moon Known to have a dence atmosphere other than
            Earth,Titan is a home
           away from home(just a few hundred degrees colder!).
            As a bonus,you get striking views of the
           Ring of Saturn
            `,
            "avg_distance":"1.6 BIL.KM",
            "travel_time":"7 YEARS"
        },
        
    ]

    return (

        <GeneralTheme>


    <PageNotification 
    count={"01"}
    title={"PICK YOUR DESTINATION"}
    />



            


                <DestinationTab tabContent={Content} />

           

           
        </GeneralTheme>
    )
}

export default Destination