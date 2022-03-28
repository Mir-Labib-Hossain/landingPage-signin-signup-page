import React from "react";
import { Link } from "react-router-dom";
 import { Button, Icon,Spanner } from "../Common.styled";
import { ModeProps } from "../Main";
 import { LinkBox, Links, Nav, P, PButton, Title } from "./styled";

interface NavState {}
const NavbarView: React.FC<NavState & ModeProps> = ({ darkMode, modeHandler }) => {
  return (
    <>
      <Nav>
        <Link to="">
        <Title>
          Stock'<Spanner>X</Spanner>
        </Title>
        </Link>
        <Links>
          <Link to="">
            <LinkBox>
              <Icon className="fa-brands fa-speakap"></Icon>
              <P>Invest</P>
            </LinkBox>
          </Link>
          <Link to="">
            <LinkBox>
              <Icon className="fa-solid fa-circle-info"></Icon>
              <P>Support</P>
            </LinkBox>
          </Link>
          <Link to="">
            <LinkBox>
              <Icon className="fa-brands fa-bitcoin"></Icon>
              <P>Crypto</P>
            </LinkBox>
          </Link>
          <LinkBox>
            <PButton onClick={modeHandler}>
              <Icon className="fa-solid fa-circle-half-stroke"></Icon>
              <P>{darkMode ? "Dark" : "Light"}</P>
            </PButton>
          </LinkBox>
          <Link to="/signin">
            <LinkBox>
              <Button>Sign-in</Button>
            </LinkBox>
          </Link>
        </Links>
      </Nav>
    </>
  );
};

export default NavbarView;
