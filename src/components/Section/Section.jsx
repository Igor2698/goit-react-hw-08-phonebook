import { MainSection, Container } from './Section.styled';

const Section = ({ children }) => {
  return (
    <MainSection>
      <Container>{children}</Container>
    </MainSection>
  );
};

export default Section;
