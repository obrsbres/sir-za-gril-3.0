import styled from 'styled-components';

import { PiFarmDuotone } from 'react-icons/pi';
import { GiFarmTractor } from 'react-icons/gi';

import gril from '../../../public/net/gril.jpg';
import trad from '../../../public/net/trad.jpg';
import cream from '../../../public/net/cream.jpg';
import milk from '../../../public/net/milk.jpg';
import domaci from '../../../public/net/domaci.jpg';

const StyledGoods = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  width: 100%;
  padding: clamp(4rem, 8vw, 8rem) 2rem;
  background-color: var(--brand-cream);
  text-align: center;
`;

const Eyebrow = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--brand-blue-500);
`;

const Heading = styled.h2`
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(2.4rem, 4vw, 3.6rem);
  color: var(--brand-gold-600);
  max-width: 60rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 110rem;
`;

const Card = styled.figure`
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  aspect-ratio: 3 / 4;
  box-shadow: var(--shadow-md);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-lg);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Caption = styled.figcaption`
  position: absolute;
  inset: auto 0 0 0;
  padding: 1.2rem 1rem;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), transparent);
  color: #fdf8ec;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.4rem;
`;

const FootLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 600;
  font-size: clamp(1.6rem, 2vw, 2.2rem);
  color: var(--brand-blue-500);
`;

const products = [
  { alt: 'Грил сир', src: gril, label: 'Сир за грил' },
  { alt: 'млеко', src: milk, label: 'Свеже млеко' },
  { alt: 'ситан сир', src: trad, label: 'Традиционални сир' },
  { alt: 'филије', src: domaci, label: 'Домаћи производи' },
  { alt: 'увара', src: cream, label: 'Кајмак и увара' },
];

function Goods() {
  return (
    <StyledGoods>
      <Eyebrow>~ наши производи ~</Eyebrow>
      <Heading>Ми нудимо квалитетне сиреве</Heading>
      <CardGrid>
        {products.map((p) => (
          <Card key={p.label}>
            <Img alt={p.alt} src={p.src} />
            <Caption>{p.label}</Caption>
          </Card>
        ))}
      </CardGrid>
      <FootLine>
        <PiFarmDuotone style={{ fontSize: '2.4rem' }} />
        <span>100% еко производи!</span>
        <GiFarmTractor style={{ fontSize: '2.4rem' }} />
      </FootLine>
    </StyledGoods>
  );
}

export default Goods;
