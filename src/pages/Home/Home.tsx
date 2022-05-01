import {
    HeroImageBackground,
    HeroContainer,RoundExploreContainer,HeroContentContainer,HeroHeadingText,RoundExplore
} from "./Home.style";
import Nav from "../../Components/Nav/Nav";
import { useNavigate } from "react-router-dom";


const Home = ()=>{

    const navigate = useNavigate()
    return(
        <HeroImageBackground>
            
            <Nav/>

            <HeroContainer>

                <HeroContentContainer>
                        <p>SO, YOU WANT TO TRAVEL TO</p>
                            <HeroHeadingText>
                                SPACE
                            </HeroHeadingText>
                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world  experience!</p>
                </HeroContentContainer>

                <RoundExploreContainer>

                <RoundExplore onClick={()=>navigate('destination')}>
                    <p>EXPLORE</p>
                </RoundExplore>
                </RoundExploreContainer>
            </HeroContainer>

        </HeroImageBackground>
    )
}


export default Home