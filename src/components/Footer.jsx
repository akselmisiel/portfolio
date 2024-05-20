import * as React from "react";
import styled from "styled-components";

const Section = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme.footerbg};
  display: flex;
  justify-content: center;
  padding: 50px 60px;

  @media (max-width: 1118px) {
    padding: 0 20px 20px 20px;
  }
`;

const Container = styled.div`
  display: flex;
  margin-top: 5px;
  width: 100%;
  max-width: 70vw;
  flex-direction: column;

  @media (max-width: 1118px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.h1text};
  font: 600 42px/53px Inter, sans-serif;

  @media (max-width: 1118px) {
    max-width: 100%;
  }
`;

const MainContent = styled.div`
  display: flex;
  margin-top: 61px;
  width: 100%;
  gap: 10px;
  font-weight: 500;

  @media (max-width: 1118px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const ContactButton = styled.a`
  display: flex;
  gap: 2px;
  font-size: 20px;
  white-space: nowrap;
  letter-spacing: 1px;
  flex: 1;
  margin: auto 0;
  color: ${({ theme }) => theme.footermail};

  @media (max-width: 1118px) {
    white-space: initial;
  }
`;

const Links = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  font-size: 18px;
  letter-spacing: 0.18px;
  line-height: 150%;
  flex: 1;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.h1text};
  ${(props) => {
    switch (props.type) {
      case "github":
        return "color: #00ab6b;";
      case "linkedin":
        return "color: #0077b5;";
      default:
        return null;
    }
  }}
  font-family: Inter, sans-serif;
`;

function Footer() {
  return (
    <Section>
      <Container>
        <Title>
          Let’s work together on <br /> your next product.
        </Title>
        <MainContent>
          👉
          <ContactButton href="mailto:akselmisiel@gmail.com">
            akselmisiel@gmail.com
          </ContactButton>
          <Links>
            <Link href="#" type="blog">
              Personal Blog
            </Link>
            <Link href="https://github.com/akselmisiel" type="github">
              Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/aksel-mi%C5%9Fiel-9a53942b9/"
              type="linkedin"
            >
              LinkedIn
            </Link>
          </Links>
        </MainContent>
      </Container>
    </Section>
  );
}

export default Footer;
