"use client";

import styled from "styled-components";
import Link from "next/link";

interface HomeViewProps {
  stats: {
    tierCount: number;
    specialCoatCount: number;
    habitatCount: number;
  };
  t: any;
}

export default function HomeView({ stats, t }: HomeViewProps) {
  return (
    <FullPageContainer>
      <HeroSection>
        <ContentWrapper>
          <Badge>{t.badge_community}</Badge>
          <h1>
            Zoo 2: Animal Park <span>Manager</span>
          </h1>

          <StatsBar>
            <StatItem>
              <div className="number">{stats.tierCount}</div>
              <div className="label">{t.stats_animals}</div>
            </StatItem>
            <StatItem>
              <div className="number">{stats.specialCoatCount}</div>
              <div className="label">{t.stats_specialCoat}</div>
            </StatItem>
            <StatItem>
              <div className="number">{stats.habitatCount}</div>
              <div className="label">{t.stats_biomes}</div>
            </StatItem>
            <StatItem>
              <div className="number">6</div>
              <div className="label">{t.stats_regions}</div>
            </StatItem>
          </StatsBar>

          <ActionGrid>
            <Link href="/AnimalOverview" passHref legacyBehavior>
              <MenuCard $color="#4ca64c">
                <Icon>🐾</Icon>
                <h3>{t.cards_lexicon_title}</h3>
                <p>{t.cards_lexicon_text}</p>
              </MenuCard>
            </Link>

            <Link href="/varianten" passHref legacyBehavior>
              <MenuCard $color="#3498db">
                <Icon>🎨</Icon>
                <h3>{t.cards_specialCoat_title}</h3>
                <p>{t.cards_specialCoat_text}</p>
              </MenuCard>
            </Link>

            <Link href="/klub" passHref legacyBehavior>
              <MenuCard $color="#f39c12">
                <Icon>🏆</Icon>
                <h3>{t.cards_club_title}</h3>
                <p>{t.cards_club_text}</p>
              </MenuCard>
            </Link>
          </ActionGrid>
        </ContentWrapper>
      </HeroSection>
    </FullPageContainer>
  );
}

// --- Korrigierte Styled Components ---
const FullPageContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.brand.lime};
`;

const HeroSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: url("/images/Zoo2_AnimalPark.jpg");
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0.4) 100%
    );
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 2;
  margin: 0 auto;
  padding: 0 40px;

  h1 {
    font-size: clamp(2.2rem, 6vw, 4rem);
    color: ${({ theme }) => theme.colors.brand.greenDark};
    margin-bottom: 30px;
    text-shadow: 0 2px 4px rgba(255, 255, 255, 0.5);
    span {
      color: ${({ theme }) => theme.colors.brand.greenDark};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 20px; /* Weniger Padding auf Mobile */
  }
`;

const Badge = styled.span`
  background: ${({ theme }) => theme.colors.brand.greenDark};
  color: white; /* Oder eine Kontrastfarbe */
  padding: 6px 16px;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: bold;
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto 50px auto;
  background: rgba(255, 255, 255, 0.5);

  backdrop-filter: ${({ theme }) => theme.glassBlur || "blur(10px)"};
  -webkit-backdrop-filter: blur(10px);

  border: 1px solid rgba(120, 255, 120, 0.15);

  padding: 20px 40px;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 20px;
    border-radius: 25px;
    max-width: 340px;
  }
`;
const StatItem = styled.div`
  .number {
    color: ${({ theme }) => theme.colors.brand.greenDark};
    font-size: 1.8rem;
    font-weight: 900;
  }
`;

const ActionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  width: 100%;
  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

interface MenuCardProps {
  $color?: string;
}

const MenuCard = styled.a<MenuCardProps>`
  display: block;
  padding: 30px;
  border-radius: ${({ theme }) => theme.borderRadius || "20px"};
  cursor: pointer;
  text-decoration: none;
  text-align: left;
  height: 100%;

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  border: 1px solid rgba(120, 255, 120, 0.15);
  /* ODER: border: ${({ theme }) =>
    theme.glassBorder || "1px solid rgba(120, 255, 120, 0.15)"}; */

  transition: all 0.3s ease;
  will-change: transform, border-color, box-shadow; /* Performance Boost */

  &:hover {
    border-color: ${(props) =>
      props.$color || props.theme.colors.brand.greenDark};
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    /* NEU: Leichte Verringerung der Unschärfe auf Hover für Feedback */
    backdrop-filter: blur(8px);
  }

  h3 {
    margin: 15px 0 10px;
    color: #333;
    font-size: 1.25rem;
    font-weight: 800;
  }

  p {
    font-size: 0.95rem;
    margin: 0;
    color: #777;
    line-height: 1.4;
    font-weight: 500;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px;
    h3 {
      font-size: 1.15rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
`;
