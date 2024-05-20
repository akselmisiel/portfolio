import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 77px;
  box-sizing: border-box;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  font-family: Inter;
  font-weight: 500;
  line-height: 28px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const HireButton = styled.button`
  padding: 12px 32px;
  background: white;
  border-radius: 6px;
  border: 1px solid #3730a3;
  color: #3730a3;
  font-size: 18px;
  font-family: Inter;
  font-weight: 500;
  line-height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoBackground = styled.div`
  width: 63.68px;
  height: 62px;
  background: ${({ theme }) => theme.iconbg};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.div`
  color: ${({ theme }) => theme.icontext};
  font-size: 24px;
  font-family: Inter;
  font-weight: 600;
  transform: rotate(29.34deg);
`;

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <LogoBackground>
          <LogoText>A</LogoText>
        </LogoBackground>
      </LogoContainer>
      <Nav>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <HireButton>Hire me</HireButton>
      </Nav>
    </Container>
  );
};

export default Header;
