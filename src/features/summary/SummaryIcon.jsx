import styled from 'styled-components';
import useScreenWidth from '../../hooks/useScreenWidth';
const StyledImgBox = styled.div`
  height: 95%;
  width: 100%;
  align-self: center;
  justify-self: center;
  background-color: var(--color-grey-200);
  border: 1px solid var(--color-yellow-700);
  border-left: none;
  border-radius: 4px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  grid-column: 2/2;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 4% 4% 0px 0px;
  overflow: hidden;
`;
const StyledImg = styled.img`
  height: auto;
  width: ${(props) => (props.$isMobile ? '100px' : '80%')};
  border: solid 3px var(--color-indigo-700);
  border-radius: 4px;
`;
function SummaryIcon({ src, alt }) {
  const isMobile = useScreenWidth() === 'mobile';
  return (
    <StyledImgBox $isMobile={isMobile}>
      <StyledImg src={src} alt={alt} $isMobile={isMobile} />
    </StyledImgBox>
  );
}

export default SummaryIcon;
