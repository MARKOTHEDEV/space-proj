import { Link ,NavLink as ReactNavLisk} from "react-router-dom";
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
                            <ReactNavLisk to="/"><span>00</span> Home</ReactNavLisk>
                        </NavLink>

                        <NavLink>
                        <ReactNavLisk to="/destination"><span>01</span> DESTINATION</ReactNavLisk>
                       
                        </NavLink>

                        <NavLink>
                        <ReactNavLisk to="/crew"><span>02</span> CREW</ReactNavLisk>

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