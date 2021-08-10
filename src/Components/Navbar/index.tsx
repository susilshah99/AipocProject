import React from "react";
import {
  NavbarConatiner,
  Nav,
  NavItem,
  NavMenu,
  NavLinkItem,
  MobileIcon,
} from "./components/NavbarElement";
import { FaBars } from "react-icons/fa";

const Navbar = (props: any) => {
  const { toggle } = props;
  return (
    <React.Fragment>
      <Nav>
        <NavbarConatiner>
          <h3 style={{ color: "white" }}>My Aipoc</h3>
        </NavbarConatiner>

        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinkItem to="/myaipocgoal">MyAipoc goal</NavLinkItem>
          </NavItem>
          <NavItem>
            {" "}
            <NavLinkItem to="/home">Home</NavLinkItem>
          </NavItem>
          <NavItem>
            <NavLinkItem to="/looksinteresting">Looks Interesting</NavLinkItem>
          </NavItem>
          <NavItem>
            <NavLinkItem to="/traininginml">Training in ML</NavLinkItem>
          </NavItem>
          <NavItem>
            <NavLinkItem to="/contact">Contact us</NavLinkItem>
          </NavItem>
        </NavMenu>
      </Nav>
    </React.Fragment>
  );
};
export default Navbar;
