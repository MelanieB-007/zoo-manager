"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import styled, { keyframes } from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import LangSwitcher from "./LangSwitcher";
import RoleBadge from "./RoleBadge";

export default function Login() {
  const { data: session } = useSession();
  const t = useTranslations("Navigation"); // Wir nutzen den gleichen Namespace für Login-Texte
  const [showLogout, setShowLogout] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const user = session?.user;
  // @ts-ignore - Falls die Rolle noch nicht im Standard-Typ von NextAuth ist
  const userRole = user?.role || "";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowLogout(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <LoginWrapper ref={wrapperRef}>
      <TopRow>
        <LangSwitcher />

        {session ? (
          <AvatarContainer>
            <UserWrapper onClick={() => setShowLogout(!showLogout)}>
              <UserImage
                src={user?.image || "/images/default-avatar.png"}
                alt="Profil"
              />
              {!showLogout && (
                <AvatarTooltip className="avatar-tooltip">
                  {t("login_open_menu")} 🐾
                </AvatarTooltip>
              )}
            </UserWrapper>

            {showLogout && (
              <LogoutBadge onClick={() => signOut({ callbackUrl: "/" })}>
                {t("login_logout")} 👋
              </LogoutBadge>
            )}
          </AvatarContainer>
        ) : (
          <HeaderButton onClick={() => signIn("discord")}>
            {t("login_button")}
          </HeaderButton>
        )}
      </TopRow>

      {session && (
        <BottomRow>
          <FlexContainer>
            <RoleBadge role={userRole} />
            <WelcomeText>
              {t("login_welcome")}, {user?.name?.split(" ")[0]}!
            </WelcomeText>
          </FlexContainer>
        </BottomRow>
      )}
    </LoginWrapper>
  );
}

// --- Styled Components ---

const popIn = keyframes`
  from { opacity: 0; transform: scale(0.8) translateY(-10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: center;
    gap: 15px;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  object-fit: cover;
`;

const AvatarTooltip = styled.span`
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);

  background: ${({ theme }) => theme.colors.brand.orange};
  color: ${({ theme }) => theme.colors.brand.green};
  padding: 5px 12px;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  white-space: nowrap;

  box-shadow: 3px 3px 0 ${({ theme }) => theme.colors.brand.black};
  border: 2px solid white;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  pointer-events: none;
  z-index: 1000;
`;

const UserWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    ${AvatarTooltip} {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(0);
    }
  }
`;

const LogoutBadge = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  background: ${({ theme }) => theme.colors.brand.orange};
  color: ${({ theme }) => theme.colors.brand.green};
  border: ${({ theme }) => theme.glassBorder};
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 0.7rem;
  font-weight: 800;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1001;

  box-shadow: ${({ theme }) => theme.shadows.shadowHeaderButton};
  animation: ${popIn} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    background: ${({ theme }) => theme.colors.brand.orangeLight};
    transform: translateY(-2px);
  }
`;

const HeaderButton = styled.button`
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.brand.orange};
  border: ${({ theme }) => theme.glassBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.brand.green};
  font-weight: 800;
  text-transform: uppercase;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.brand.orangeLight};
  }
`;

const WelcomeText = styled.span`
  color: white;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  text-shadow: 0 2px 4px black;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
