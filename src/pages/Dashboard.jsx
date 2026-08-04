import '@fontsource/lora';
import { useRef, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

import Headline from '../features/dashboard/Headline';
import DashStats from '../features/dashboard/DashStats';
import Goods from '../features/dashboard/Goods';
import About from '../features/dashboard/About';

const VIEWS = [
  { id: 'home', label: 'Почетна' },
  { id: 'products', label: 'Производи' },
  { id: 'about', label: 'О нама' },
];

const StyledDashboard = styled.div`
  position: relative;
  width: 100%;
  /* AppLayout gives the header row 8% of the viewport and the content
     row the rest — match that so the carousel fills the screen without
     creating extra outer scroll. */
  height: 92vh;
  min-height: 50rem;
  font-family: var(--font-display);
`;

const Track = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  background-color: var(--brand-cream);

  /* hide scrollbar, navigation is via arrows/dots/swipe */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Pane = styled.section`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.$side === 'left' ? 'left: 1.6rem;' : 'right: 1.6rem;')}
  z-index: 20;
  width: 4.4rem;
  height: 4.4rem;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  color: var(--brand-ink);
  background-color: rgba(253, 248, 236, 0.85);
  box-shadow: var(--shadow-lg);
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  opacity: ${(props) => (props.$disabled ? 0 : 1)};
  pointer-events: ${(props) => (props.$disabled ? 'none' : 'auto')};

  &:hover {
    background-color: var(--brand-gold-500);
  }

  @media (max-width: 700px) {
    width: 3.6rem;
    height: 3.6rem;
    font-size: 1.8rem;
  }
`;

const DotBar = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  display: flex;
  gap: 1rem;
  padding: 0.8rem 1.4rem;
  border-radius: 999px;
  background-color: rgba(43, 36, 22, 0.35);
  backdrop-filter: blur(4px);
`;

const Dot = styled.button`
  width: ${(props) => (props.$active ? '2.4rem' : '1rem')};
  height: 1rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.$active ? 'var(--brand-gold-500)' : 'rgba(253, 248, 236, 0.6)'};
  transition: width 0.25s ease, background-color 0.25s ease;
`;

function Dashboard() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, VIEWS.length - 1));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: 'smooth' });
  }, []);

  // Keep the dots/arrows in sync when the user scrolls or swipes manually
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame;
    function handleScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const index = Math.round(track.scrollLeft / track.clientWidth);
        setActive((prev) => (prev !== index ? index : prev));
      });
    }

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Keep position correct on resize (e.g. rotating a phone)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    function handleResize() {
      track.scrollTo({ left: active * track.clientWidth });
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [active]);

  return (
    <StyledDashboard>
      <NavButton
        $side="left"
        $disabled={active === 0}
        onClick={() => scrollToIndex(active - 1)}
        aria-label="Претходни приказ"
      >
        <HiChevronLeft />
      </NavButton>
      <NavButton
        $side="right"
        $disabled={active === VIEWS.length - 1}
        onClick={() => scrollToIndex(active + 1)}
        aria-label="Следећи приказ"
      >
        <HiChevronRight />
      </NavButton>

      <Track ref={trackRef}>
        <Pane aria-label={VIEWS[0].label}>
          <Headline />
          <DashStats />
        </Pane>
        <Pane aria-label={VIEWS[1].label}>
          <Goods />
        </Pane>
        <Pane aria-label={VIEWS[2].label}>
          <About />
        </Pane>
      </Track>

      <DotBar>
        {VIEWS.map((view, index) => (
          <Dot
            key={view.id}
            $active={index === active}
            onClick={() => scrollToIndex(index)}
            aria-label={`Иди на: ${view.label}`}
          />
        ))}
      </DotBar>
    </StyledDashboard>
  );
}

export default Dashboard;
