import React from "react";
import { Typography } from "antd";
import {
  FooterContainer,
  AboutConatiner,
  LinksConatiner,
  ContactConatiner,
} from "./StyledElements";
import {
  IoLocationSharp,
  IoCall,
  IoMail,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

const { Text } = Typography;

const Footer = () => {
  return (
    <React.Fragment>
      <FooterContainer>
        <AboutConatiner>
          <Text style={{ color: "white", fontSize: "18px" }}>About Us</Text>
          <div style={{ height: "2px", width: "35px", backgroundColor: "red" }}></div>
          <Text style={{ color: "#999" }}>
            Typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </Text>
          <div style={{ display: "flex", gap: "8px", paddingTop: "15px" }}>
            <div
              style={{
                height: "34px",
                width: "34px",
                borderRadius: "4px",
                backgroundColor: "#222",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IoLogoFacebook style={{ color: "white" }} />
            </div>
            <div
              style={{
                height: "34px",
                width: "34px",
                borderRadius: "4px",
                backgroundColor: "#222",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IoLogoInstagram style={{ color: "white" }} />
            </div>
            <div
              style={{
                height: "34px",
                width: "34px",
                borderRadius: "4px",
                backgroundColor: "#222",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IoLogoTwitter style={{ color: "white" }} />
            </div>
            <div
              style={{
                height: "34px",
                width: "34px",
                borderRadius: "4px",
                backgroundColor: "#222",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IoLogoYoutube style={{ color: "white" }} />
            </div>
          </div>
        </AboutConatiner>
        <LinksConatiner>
          <Text style={{ color: "white", fontSize: "18px" }}>Useful Links</Text>
          <div style={{ height: "2px", width: "35px", backgroundColor: "red" }}></div>
          <Text style={{ color: "#999" }}>About</Text>
          <Text style={{ color: "#999" }}>FAQ</Text>
          <Text style={{ color: "#999" }}>Privacy Policy</Text>
          <Text style={{ color: "#999" }}>Help</Text>
          <Text style={{ color: "#999" }}>Terms & Conditions</Text>
        </LinksConatiner>
        <ContactConatiner>
          <Text style={{ color: "white", fontSize: "18px" }}>Contact Us</Text>
          <div style={{ height: "2px", width: "35px", backgroundColor: "red" }}></div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <IoLocationSharp style={{ color: "white" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "3px",
              }}
            >
              <Text style={{ color: "#999" }}>647 Linda Street</Text>
              <Text style={{ color: "#999" }}>Phoenixville, PA 19460</Text>
              <Text style={{ color: "#999" }}>USA</Text>
            </div>
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <IoCall style={{ color: "white" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
              <Text style={{ color: "#999" }}>+123 4567 8900</Text>
              <Text style={{ color: "#999" }}>+123 4567 8900</Text>
            </div>
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <IoMail style={{ color: "white" }} />
            <Text style={{ color: "#999" }}>knowmore@gmail.com</Text>
          </div>
        </ContactConatiner>
      </FooterContainer>
    </React.Fragment>
  );
};
export default Footer;
