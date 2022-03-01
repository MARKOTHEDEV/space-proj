import { Link } from "react-router-dom";
import {MainNavContainer,
    LogoContainer,HamBurgerMenuStyle,
    NavLinks,NavLink
} from "./Nav.style";
import Logo from "../../assets/image/general/logo.svg";
import {GiHamburgerMenu} from "react-icons/gi";
const Nav =()=>{



    return (
       <MainNavContainer>

                <LogoContainer>
                        <img src={Logo}/>
                </LogoContainer>


                <NavLinks>
                        <NavLink>
                            <a href="#">00 Home</a>
                        </NavLink>

                        <NavLink>
                        <a href="#">01 DESTINATION</a>
                        </NavLink>

                        <NavLink>
                            <a href="#">02 CREW</a>
                        </NavLink>

                        <NavLink>
                            <a href="#">03 TECHNOLOGY</a>
                        </NavLink>
                </NavLinks>

                <HamBurgerMenuStyle>

                        <GiHamburgerMenu />
                </HamBurgerMenuStyle>

       </MainNavContainer> 
    )
}

export default Nav