import styled from 'styled-components';
import Button from '../../ui/Button';
import ButtonGroup from '../../ui/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import useScreenWidth from '../../hooks/useScreenWidth';

const StyledFirstBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(1.6rem, 3vw, 3.2rem);
  max-width: 60rem;
  margin: 0 auto 0 clamp(2rem, 8vw, 10rem);
  padding: 2rem;
  color: #fdf8ec;
`;

const StyledEyebrow = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-size: clamp(1.2rem, 1vw, 1.4rem);
  font-weight: 600;
  color: var(--brand-gold-300);
`;

const StyledHeader = styled.h1`
  font-family: var(--font-display);
  font-weight: 700;
  line-height: 1.1;
  font-size: clamp(2.8rem, 6vw, 5.6rem);
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
`;

function FirstBoxHeadline() {
  const navigate = useNavigate();
  const displaySize = useScreenWidth();
  const isMobile = displaySize === 'mobile';

  function goToSection(page, section) {
    navigate(page, { state: { targetId: section } });
  }

  return (
    <StyledFirstBox>
      <StyledEyebrow>Домаћи производи • од 1998.</StyledEyebrow>
      <StyledHeader>Газдинство Митровић</StyledHeader>
      <ButtonGroup style={{ justifyContent: 'flex-start', flexWrap: 'wrap' }}>
        <Button
          $size={isMobile ? 'medium' : 'large'}
          style={{
            color: 'var(--brand-ink)',
            fontWeight: 600,
            backgroundColor: 'var(--brand-gold-500)',
            borderRadius: 'var(--border-radius-lg)',
          }}
          onClick={() => navigate('/customersData')}
        >
          Наручи сад
        </Button>
        <Button
          $size={isMobile ? 'medium' : 'large'}
          $variation="secondary"
          style={{
            color: '#fdf8ec',
            fontWeight: 600,
            backgroundColor: 'rgba(253, 248, 236, 0.12)',
            borderColor: 'rgba(253, 248, 236, 0.5)',
            borderRadius: 'var(--border-radius-lg)',
            backdropFilter: 'blur(6px)',
          }}
          onClick={() => goToSection('/dashboard', 'about')}
        >
          Сазнај о сиру
        </Button>
      </ButtonGroup>
    </StyledFirstBox>
  );
}

export default FirstBoxHeadline;
