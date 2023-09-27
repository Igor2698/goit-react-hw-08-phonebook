import PropTypes from 'prop-types';
import { MainSection, Container, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <MainSection>
      <Container>
        {title && <SectionTitle>{title}</SectionTitle>}

        {children}
      </Container>
    </MainSection>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
