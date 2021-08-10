import React from "react";
import { CloseIcon, Icon, SidebarLink, SidebarMenu, SidebarWrapper } from "./StyledElements";
import styled from "@emotion/styled";

const Sidebar = (props: any) => {
  const { isOpen, toggle } = props;
  const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: black;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${isOpen ? "100%" : "0"};
    top: ${isOpen ? "0" : "-100%"};
  `;
  return (
    <React.Fragment>
      <SidebarContainer>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/myaipocgoal">MyAipoc goal</SidebarLink>
            <SidebarLink to="/home">Home</SidebarLink>
            <SidebarLink to="/looksinteresting">Looks Interesting</SidebarLink>
            <SidebarLink to="/contact" onClick={toggle}>
              Contact Us
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </React.Fragment>
  );
};
export default Sidebar;
