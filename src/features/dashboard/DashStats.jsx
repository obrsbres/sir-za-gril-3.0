import styled from 'styled-components';
import { GiDeliveryDrone, GiModernCity } from 'react-icons/gi';
import { PiCheeseBold } from 'react-icons/pi';
import { IoIosContacts } from 'react-icons/io';

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1.6rem;
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;
  padding: 3.2rem 2rem;
  transform: translateY(-4rem);

  @media (max-width: 600px) {
    transform: none;
    padding-top: 2rem;
  }
`;

const Stat = styled.div`
  background-color: var(--brand-cream);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 2rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  text-align: center;
  font-family: var(--font-body);
`;

const StyledIcons = styled.span`
  font-size: 2.8rem;
  color: var(--brand-blue-500);
  margin-bottom: 0.4rem;
`;

const StyledNums = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--brand-gold-600);
`;

const Label = styled.p`
  font-size: 1.3rem;
  color: var(--brand-ink);
`;

function DashStats() {
  return (
    <StatsRow>
      <Stat>
        <StyledIcons>
          <GiModernCity />
        </StyledIcons>
        <Label>Достава у</Label>
        <StyledNums>7</StyledNums>
        <Label>градова</Label>
      </Stat>
      <Stat>
        <StyledIcons>
          <PiCheeseBold />
        </StyledIcons>
        <Label>Производимо</Label>
        <StyledNums>3</StyledNums>
        <Label>врсте сира</Label>
      </Stat>
      <Stat>
        <StyledIcons>
          <IoIosContacts />
        </StyledIcons>
        <Label>Преко</Label>
        <StyledNums>1000</StyledNums>
        <Label>клијената</Label>
      </Stat>
      <Stat>
        <StyledIcons>
          <GiDeliveryDrone />
        </StyledIcons>
        <Label>достава</Label>
        <Label>по вашој мери</Label>
      </Stat>
    </StatsRow>
  );
}

export default DashStats;
