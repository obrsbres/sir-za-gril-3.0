import styled from 'styled-components';

import headlineImage from '../../../public/main-background.jpg';
import headlineImageTel from '/main-tel.jpg';
import FirstBoxHeadline from './FirstBoxHeadline';
import useScreenWidth from '../../hooks/useScreenWidth';

const StyledHeadline = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 90vh;
  width: 100%;
  background-image:
    linear-gradient(
      180deg,
      rgba(24, 20, 10, 0.25) 0%,
      rgba(24, 20, 10, 0.55) 100%
    ),
    url(${(props) => props.$bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    min-height: 70vh;
  }
`;

function Headline() {
  const displaySize = useScreenWidth();
  const isMobile = displaySize === 'mobile';

  return (
    <StyledHeadline $bg={isMobile ? headlineImageTel : headlineImage}>
      <FirstBoxHeadline />
    </StyledHeadline>
  );
}

export default Headline;
