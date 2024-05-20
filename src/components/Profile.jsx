import React from "react";
import styled from "styled-components";
import data from "../data.json";

const MainContainer = styled.main`
  padding: 0;
  margin-bottom: 40px;
`;

const ProfileTitle = styled.h1`
  color: ${({ theme }) => theme.h1text};
  margin-top: 42px;
  width: 100%;
  font: 600 48px/100% Inter, sans-serif;

  @media (max-width: 1118px) {
    margin-top: 40px;
    font-size: 40px;
  }
`;

const ColumnsWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 1118px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    margin-top: 40px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 0;

  @media (max-width: 1118px) {
    width: 100%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 0;

  @media (max-width: 1118px) {
    width: 100%;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  padding-right: 45px;
  gap: 20px;
  @media (max-width: 1118px) {
    margin-top: 40px;
    gap: 0;
  }
`;

const DetailsData = styled.div`
  display: flex;
  flex-direction: column;
  font: 400 18px/36px Inter, sans-serif;
  color: ${({ theme }) => theme.whiteandblack};
  letter-spacing: 0.18px;

  @media (max-width: 1118px) {
    margin-top: 40px;
  }
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.h2text};
  font: 500 30px/93% Inter, sans-serif;
  @media (max-width: 1118px) {
    margin-bottom: 0px;
  }
`;

const DetailsInfo = styled.p`
  color: ${({ theme }) => theme.whiteandblack};
  letter-spacing: 0.18px;
  margin-top: 0px;
  min-width: 140px;
  font: 600 18px/36px Inter, sans-serif;
  @media (max-width: 1118px) {
    margin-top: 0px;
  }
`;

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;

  @media (max-width: 1118px) {
    margin-top: 40px;
  }
`;

const AboutDescription = styled.p`
  color: ${({ theme }) => theme.text};
  font: 400 18px/27px Inter, sans-serif;
  margin-top: 0px;
`;
const Profile = () => {
  const profile = data.profile;
  return (
    <MainContainer>
      <ProfileTitle>{profile.title}</ProfileTitle>
      <ColumnsWrapper>
        <Column>
          <SectionTitle>Profile</SectionTitle>
          <Row>
            <DetailsWrapper>
              <DetailsInfo>
                Doğum tarihi <br />
                İkamet Şehri <br />
                Eğitim Durumu <br />
                <br />
                Tercih Ettiği Rol
              </DetailsInfo>
            </DetailsWrapper>
            <DetailsData>
              {profile.birthdate} <br />
              {profile.city} <br />
              {profile.education} <br />
              {profile.degree} <br />
              {profile.role}
            </DetailsData>
          </Row>
        </Column>
        <Column>
          <SectionTitle>About Me</SectionTitle>
          <AboutSection>
            <AboutDescription>{profile.about}</AboutDescription>
          </AboutSection>
        </Column>
      </ColumnsWrapper>
    </MainContainer>
  );
};

export default Profile;
