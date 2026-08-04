import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Logo from './Logo';
import MainNav from './MainNav';
import Button from './Button';

import { hide } from '../features/customer/customerSlice';
import useEscForClose from '../hooks/useEscForClose';
import { HiXMark } from 'react-icons/hi2';

const StyledSidebar = styled.aside`
  position: fixed;
  top: 8vh;
  left: 0;
  width: min(24rem, 80vw);
  height: 85vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(6px);
  z-index: 1000;
  transform: ${(props) =>
    props.$showSidebar ? 'translateX(0)' : 'translateX(-100%)'};

  align-self: flex-start;
  margin-right: 5px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  padding: 1.6rem 0;
  border-right: 1px solid var(--color-grey-200);
  border-top-right-radius: var(--border-radius-lg);
  border-bottom-right-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  transition: transform 0.4s ease-in-out;
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
  width: 3.6rem;
  height: 3.6rem;
  background-color: var(--color-indigo-700);
  font-size: 1.8rem;
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

function Sidebar() {
  const dispatch = useDispatch();
  function handleEvent() {
    dispatch(hide());
  }
  useEscForClose('Escape', handleEvent);
  const showSidebar = useSelector((state) => state.sidebar.showSidebar);

  return (
    <StyledSidebar $showSidebar={showSidebar}>
      <StyledButton onClick={handleEvent}>
        <HiXMark />
      </StyledButton>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
