import React from "react";
import styled from "styled-components";
import data from "../data.json";

const ContainerAll = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  flex-wrap: wrap;
  margin-top: 42px;
  @media (max-width: 1118px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const Container = styled.div`
  display: flex;
  max-width: 596px;
  flex-direction: column;
  font-size: 18px;
  font-weight: 500;
  padding: 6px 6px 0 0;
`;

const Header = styled.div`
  align-self: start;
  display: flex;
  gap: 10px;
  font-size: 20px;
  color: var(--Default-indigo-700, #4338ca);
  line-height: 140%;
`;

const Line = styled.div`
  border-color: ${({ theme }) => theme.h2text};
  border-style: solid;
  border-width: 0px;
  background-color: ${({ theme }) => theme.h2text};
  width: 102px;
  height: 1px;
  margin: auto 0;
`;

const Name = styled.div`
  color: ${({ theme }) => theme.h2text};
  font-family: Inter, sans-serif;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.h1text};
  margin-top: 54px;
  font: 700 72px/72px Inter, sans-serif;
  @media (max-width: 1118px) {
    max-width: 520px;
    margin-top: 40px;
    font-size: 40px;
    line-height: 44px;
  }
`;

const Description = styled.div`
  color: ${({ theme }) => theme.text};
  font-family: Inter, sans-serif;
  font-weight: 400;
  line-height: 28px;
  margin-top: 56px;
  @media (max-width: 1118px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Actions = styled.div`
  display: flex;
  margin-top: 43px;
  padding-right: 80px;
  gap: 12px;
  color: ${({ theme }) => theme.h2text};
  line-height: 156%;
  @media (max-width: 1118px) {
    flex-wrap: wrap;
    padding-right: 20px;
    margin-top: 40px;
  }
`;

const Button = styled.div`
  font-family: Inter, sans-serif;
  justify-content: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.h2text};
  color: ${({ theme }) => theme.blackandwhite};
  padding: 12px 32px;
  @media (max-width: 1118px) {
    display: flex;
    padding: 0 20px;
    align-items: center;
  }
`;

const IconContainer = styled.div`
  justify-content: center;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.h2text};
  border-style: solid;
  border-width: 1px;
  background-color: ${({ theme }) => theme.buttonbg};
  display: flex;
  gap: 10px;
  white-space: nowrap;
  padding: 12px 20px 12px 12px;
  @media (max-width: 1118px) {
    white-space: initial;
  }
`;

const Icon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 26px;
  fill: #3730a3;
  align-self: start;
`;

const Text = styled.div`
  font-family: Inter, sans-serif;
`;

const ProfileImage = styled.img`
  border-radius: 5%;
  width: 476px;
  height: 375px;
  object-fit: cover;
  align-self: center;
  margin-top: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width: 1118px) {
        margin-top: 40px;
        align-self: start;
        width: 410px;
        height: 390px;
`;

function Hero() {
  const hero = data.hero;

  return (
    <ContainerAll>
      <Container>
        <Header>
          <Line />
          <Name>{hero.name}</Name>
        </Header>
        <Title>{hero.title}</Title>
        <Description>{hero.description}</Description>
        <Actions>
          {hero.actions.map((action, index) =>
            action.type === "button" ? (
              <Button key={index}>{action.text}</Button>
            ) : (
              <IconContainer key={index}>
                <Icon
                  loading="lazy"
                  src={
                    localStorage.getItem("theme") === "light"
                      ? action.srcLight
                      : action.srcDark
                  }
                />
                <Text>{action.text}</Text>
              </IconContainer>
            )
          )}
        </Actions>
      </Container>
      <ProfileImage src={hero.imageSrc} />
    </ContainerAll>
  );
}

export default Hero;
