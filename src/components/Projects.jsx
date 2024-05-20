import * as React from "react";
import styled from "styled-components";
import data from "../data.json";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 60px;
`;

const SectionHeader = styled.h2`
  color: ${({ theme }) => theme.h1text};
  margin-top: 38px;
  margin-bottom: 0px;
  width: 100%;
  font: 600 48px/100% Inter, sans-serif;

  @media (max-width: 1118px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const SectionContent = styled.section`
  width: 100%;
  padding: 0;

  @media (max-width: 1118px) {
    max-width: 100%;
  }
`;

const ProjectContainer = styled.div`
  gap: 100px;
  display: flex;

  @media (max-width: 1118px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0;

  @media (max-width: 1118px) {
    width: 100%;
  }
`;

const Image = styled.img`
  aspect-ratio: 1.67;
  object-fit: cover;
  width: 100%;
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.h2text};
  margin-top: 18px;
  font: 30px/93% Inter, sans-serif;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.text};
  font-family: Inter, sans-serif;
  font-weight: 400;
  line-height: 18px;
  margin-top: 18px;
`;

const TagsContainer = styled.div`
  display: flex;
  margin-top: 18px;
  padding-right: 79px;
  flex-wrap: wrap;
  gap: 6px;
  color: ${({ theme }) => theme.h2text};
  white-space: nowrap;
  letter-spacing: -0.7px;

  @media (max-width: 1118px) {
    padding-right: 20px;
    white-space: initial;
  }
`;

const Tag = styled.span`
  font-family: Inter, sans-serif;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.h2text};
  background-color: ${({ theme }) => theme.buttonbg};
  padding: 6px 18px;
  white-space: initial;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  gap: 11px;
  font-size: 16px;
  color: #3730a3;
  @media (max-width: 1118px) {
    padding-bottom: 10px;
  }
`;

const Link = styled.a`
  font-family: Inter, sans-serif;
  text-decoration: underline;
  color: ${({ theme }) => theme.h2text};
`;

function Projects() {
  const projects = data.projects;
  return (
    <MainContainer id="projects">
      <SectionHeader>Projects</SectionHeader>
      <SectionContent>
        <ProjectContainer>
          {projects.map((project, index) => (
            <Article key={index}>
              <Image src={project.imageSrc} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TagsContainer>
                {project.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </TagsContainer>
              <LinksContainer>
                {project.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </Link>
                ))}
              </LinksContainer>
            </Article>
          ))}
        </ProjectContainer>
      </SectionContent>
    </MainContainer>
  );
}

export default Projects;
