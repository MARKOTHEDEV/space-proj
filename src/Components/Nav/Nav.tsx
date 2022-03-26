import { Link  } from "react-router-dom";
import {MainNavContainer,
    LogoContainer,HamBurgerMenuStyle,
    NavLinksContainer,NavLink
} from "./Nav.style";
import Logo from "../../assets/image/general/logo.svg";
import {GiHamburgerMenu} from "react-icons/gi";
import {RiCloseFill} from  "react-icons/ri";
import { useState } from "react";

const Nav =()=>{

    const [phoneHamState,setPhoneHamState] = useState<boolean>(false)
 
    return (
       <MainNavContainer >

                <LogoContainer>
                        <img src={Logo}/>
                </LogoContainer>


                <NavLinksContainer showPhoneNav={phoneHamState}>
                        <NavLink>
                            <Link to="/"><span>00</span> Home</Link>
                        </NavLink>

                        <NavLink>
                        <Link to="/destination"><span>01</span> DESTINATION</Link>
                       
                        </NavLink>

                        <NavLink>
                            <a href="#"><span>02</span> CREW</a>
                        </NavLink>

                        <NavLink>
                            <a href="#">
                        <span>0 3</span> TECHNOLOGY</a>
                        </NavLink>
                </NavLinksContainer>

                <HamBurgerMenuStyle  onClick={(e)=>setPhoneHamState(!phoneHamState)}>
                    {phoneHamState?
                        <RiCloseFill/>:<GiHamburgerMenu/>
                    }

                </HamBurgerMenuStyle>

       </MainNavContainer> 
    )
}

export default Nav