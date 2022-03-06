import {
    HeroImageBackground,
    HeroContainer,HeroContentContainer,HeroHeadingText,RoundExplore
} from "./Home.style";
import Nav from "../../Components/Nav/Nav";



const Home = ()=>{


    return(
        <HeroImageBackground>
            
            <Nav/>

            <HeroContainer>

                <HeroContentContainer>
                        <p>So,YOU WANT TO TRAVEL TO</p>
                            <HeroHeadingText>
                                SPACE
                            </HeroHeadingText>
                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! Explore</p>
                </HeroContentContainer>

                <RoundExplore>
                    <p>EXPLORE</p>
                </RoundExplore>
            </HeroContainer>

        </HeroImageBackground>
    )
}


export default Home