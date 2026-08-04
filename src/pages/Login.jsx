import styled from 'styled-components';

import Logo from '../ui/Logo';
import LoginForm from '../features/authentication/LoginForm';

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  place-content: center;
  gap: 2.4rem;
  padding: 2rem;
  background-color: var(--color-grey-50);
`;

const Card = styled.div`
  width: min(44rem, 90vw);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  padding: 3.2rem;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
`;

const Heading = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--color-grey-800);
`;

function Login() {
  return (
    <LoginLayout>
      <Card>
        <Logo />
        <Heading>Пријава</Heading>
        <LoginForm />
      </Card>
    </LoginLayout>
  );
}

export default Login;
