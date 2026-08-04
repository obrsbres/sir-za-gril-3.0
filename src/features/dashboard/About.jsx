import styled from 'styled-components';

import about from '../../../public/onama.jpg';
import useNavigateToSection from '../../hooks/useNavigateToSection';
import useScreenWidth from '../../hooks/useScreenWidth';

const StyledAbout = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.$isMobile ? 'column' : 'row')};
  align-items: center;
  justify-content: center;
  gap: clamp(2rem, 5vw, 6rem);
  width: 100%;
  padding: clamp(4rem, 8vw, 8rem) clamp(2rem, 6vw, 6rem);
  background-color: var(--brand-blue-500);
  color: #fdf8ec;
`;

const StyledImgContainer = styled.div`
  flex: 1 1 40rem;
  max-width: 50rem;
`;

const Img = styled.img`
  width: 100%;
  border: solid 3px var(--brand-gold-500);
  border-bottom: solid 8px var(--brand-blue-700);
  border-radius: var(--border-radius-md);
`;

const StyledTextContainer = styled.div`
  flex: 1 1 40rem;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
`;

const Eyebrow = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--brand-gold-300);
`;

const Heading = styled.h2`
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(2.2rem, 3.5vw, 3.2rem);
  color: var(--brand-gold-500);
`;

const Paragraph = styled.p`
  font-family: var(--font-body);
  font-size: 1.6rem;
  line-height: 1.7;
  text-align: left;
  color: #f4f1ea;
`;

function About() {
  useNavigateToSection();
  const displaySize = useScreenWidth();
  const isMobile = displaySize === 'mobile';

  return (
    <StyledAbout id="about" $isMobile={isMobile}>
      <StyledImgContainer>
        <Img src={isMobile ? '/about2.png' : about} alt="О нашем газдинству" />
      </StyledImgContainer>
      <StyledTextContainer>
        <Eyebrow>~ О нама ~</Eyebrow>
        <Heading>Наш сир је наш понос</Heading>
        <Paragraph>
          Газдинство Митровић производи домаће сиреве и млечне производе на
          традиционалан начин, без вештачких додатака. Свака достава стиже
          свежа, директно са нашег имања до вашег стола.
        </Paragraph>
      </StyledTextContainer>
    </StyledAbout>
  );
}

export default About;
