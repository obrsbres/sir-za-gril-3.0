import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import Button from './Button';
import { HiMenuAlt2 } from 'react-icons/hi';

import { show } from '../features/customer/customerSlice';
import useEscForClose from '../hooks/useEscForClose';
import useCloseOutsideClick from '../hooks/useCloseOutsideClick';
import useScreenWidth from '../hooks/useScreenWidth';

const StyledSidebarShowButton = styled.button`
  position: fixed;
  top: 8vh;
  left: 0;
  padding: 0.5rem 2rem;
  font-size: ${(props) => (props.$isMobile ? '1.2rem' : '1.6rem')};
  width: 18vw;
  margin: 0 1vw;
  height: 5vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: 10s ease-in-out;
  transform: ${(props) =>
    props.$showSidebar ? 'translateX(-100% )' : 'translateX(0%)'};
  align-self: flex-start;
  margin-right: 5px;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  color: var(--color-indigo-700);
  border-right: 3px solid var(--color-green-700);
  border-top: 3px solid var(--color-green-700);
  border-bottom: 3px solid var(--color-green-700);
  border-radius: 8px;
  transition: 1s ease-in-out;
`;

export default function SidebarShowButton() {
  const isMobile = useScreenWidth() === 'mobile';
  const dispatch = useDispatch();
  function handleEvent() {
    dispatch(show());
  }
  const ref = useCloseOutsideClick(handleEvent, true);
  const showSidebar = useSelector((state) => state.sidebar.showSidebar);
  useEscForClose('Escape', handleEvent);
  return (
    <StyledSidebarShowButton
      $isMobile={isMobile}
      onClick={handleEvent}
      ref={ref}
      $showSidebar={showSidebar}
    >
      <HiMenuAlt2 />
      <span>Мени</span>
    </StyledSidebarShowButton>
  );
}
