import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 40px;
  display: flex;
  gap: 14px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const ModeToggleContainer = styled.div`
  align-self: stretch;
  display: flex;
  gap: 9px;
`;

const ModeToggleSwitch = styled.button`
  border-radius: 100px;
  background-color: #4731d3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 4px 25px;

  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const ToggleLabel = styled.span`
  color: #777;
  letter-spacing: 1.5px;
  flex-grow: 1;
  margin: auto 0;
  font: 700 15px Inter, sans-serif;
`;

const Separator = styled.span`
  color: #777;
  letter-spacing: 1.5px;
  align-self: stretch;
  margin: auto 0;
  font: 700 15px Inter, sans-serif;
`;

const LanguageSwitchLink = styled.a`
  color: #777;
  letter-spacing: 1.5px;
  align-self: stretch;
  margin: auto 0;
  font: 700 15px Inter, sans-serif;
  cursor: pointer;
`;

const StyledSpan = styled.span`
  color: rgba(71, 49, 211, 1);
`;

function Switch({ toggleTheme }) {
  return (
    <Wrapper>
      <ModeToggleContainer>
        <ModeToggleSwitch onClick={toggleTheme} />
        <ToggleLabel>
          {localStorage.getItem("theme") === "dark"
            ? "LIGHT THEME"
            : "DARK THEME"}
        </ToggleLabel>
      </ModeToggleContainer>
      <Separator>|</Separator>
      <LanguageSwitchLink>
        <StyledSpan>TÜRKÇE</StyledSpan>’YE GEÇ
      </LanguageSwitchLink>
    </Wrapper>
  );
}

export default Switch;
