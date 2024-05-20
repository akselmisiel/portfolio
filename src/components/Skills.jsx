import React from "react";
import styled from "styled-components";
import data from "../data.json";

const SkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-bottom: 40px;
  margin-top: 30px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.h1text};
  width: 100%;
  font: 600 48px/100% Inter, sans-serif;
  @media (max-width: 1118px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 1118px) {
    max-width: 100%;
  }
`;

const SkillsRow = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 1118px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const SkillColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  @media (max-width: 1118px) {
    width: 100%;
  }
`;

const SkillCard = styled.article`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 3px 0;
`;

const SkillTitle = styled.h3`
  color: ${({ theme }) => theme.h2text};
  font: 500 30px/93% Inter, sans-serif;
`;

const SkillDescription = styled.p`
  color: ${({ theme }) => theme.text};
  margin-top: 28px;
  font: 400 12px/16px Inter, sans-serif;
`;

const Skills = () => {
  const skills = data.skills;
  return (
    <SkillsSection id="skills">
      <Title>Skills</Title>
      <SkillsContainer>
        <SkillsRow>
          {skills.map((skill, index) => (
            <SkillColumn key={index}>
              <SkillCard>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillDescription>{skill.description}</SkillDescription>
              </SkillCard>
            </SkillColumn>
          ))}
        </SkillsRow>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
