"use client";

import styled, { css } from "styled-components";
import { IoChevronDown } from "react-icons/io5";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";

import { Link, usePathname } from "@/i18n/routing";

export default function Navigation() {
  const t = useTranslations("Navigation"); // Namespace in deiner de.json/en.json
  const { data: session } = useSession();
  const pathname = usePathname(); // Gibt den Pfad OHNE /de oder /en zurück

  const isActive = (path: string) =>
    pathname === path || (path !== "/" && pathname.startsWith(path));

  return (
    <NavContainer>
      <NavList>
        {/* Home */}
        <NavItem>
          <NavLink href="/" $active={pathname === "/"}>
            {t("home")}
          </NavLink>
        </NavItem>

        {/* Tiere Dropdown */}
        <NavItem>
          <NavButton $active={isActive("/animals")}>
            {t("animals")} <IoChevronDown className="arrow" />
          </NavButton>
          <Dropdown>
            <li>
              <DropdownLink href="/animals" $active={pathname === "/animals"}>
                {t("animal_overview")}
              </DropdownLink>
            </li>
            {session && (
              <li>
                <DropdownLink
                  href="/animals/create"
                  $active={pathname === "/animals/create"}
                >
                  {t("animal_create")}
                </DropdownLink>
              </li>
            )}
          </Dropdown>
        </NavItem>

        {/* Klub Dropdown */}
        <NavItem>
          <NavButton $active={isActive("/contests")}>
            {t("club")} <IoChevronDown className="arrow" />
          </NavButton>
          <Dropdown>
            <li>
              <DropdownLink
                href="/contests/statues"
                $active={pathname === "/contests/statues"}
              >
                {t("club_statues")}
              </DropdownLink>
            </li>
            {session && (
              <>
                <li>
                  <DropdownLink
                    href="/contests"
                    $active={pathname === "/contests"}
                  >
                    {t("club_contests")}
                  </DropdownLink>
                </li>
                <li>
                  <DropdownLink
                    href="/contests/create"
                    $active={pathname === "/contests/create"}
                  >
                    {t("club_create_contest")}
                  </DropdownLink>
                </li>
              </>
            )}
          </Dropdown>
        </NavItem>
      </NavList>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  position: relative;

  &:hover > ul {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  &:hover {
    transform: rotate(180deg);
  }
`;

const NavElementStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 38px;
  padding: 0 1.2rem;

  background: ${({ theme }) => theme.colors.brand.grey};
  border: ${({ theme }) => theme.shadows.shadowHeaderButton};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.shadowHeaderButton};

  color: ${({ theme }) => theme.colors.brand.green};
  font-weight: 800;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.shadowHeaderButtonHover};
    background: ${({ theme }) => theme.colors.brand.orangeLight};
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  ${NavElementStyles};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.brand.orange : theme.colors.brand.green};

  &::before {
    content: "🐾";
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    display: ${({ $active }) => ($active ? "block" : "none")};
    filter: drop-shadow(1px 1px 0 ${({ theme }) => theme.colors.brand.black});
    font-size: 0.8rem;
  }
`;

// 1. Definiere, welche Props die Komponente empfangen darf
interface NavButtonProps {
  $active: boolean;
}
// 2. Übergib das Interface in spitzen Klammern <...>
const NavButton = styled.div<NavButtonProps>`
  ${NavElementStyles};

  color: ${({ $active, theme }) =>
    $active ? theme.colors.brand.orange : theme.colors.brand.green};
  cursor: pointer;

  &::before {
    content: "🐾";
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    display: ${({ $active }) => ($active ? "block" : "none")};
    filter: drop-shadow(1px 1px 0 ${({ theme }) => theme.colors.brand.black});
    font-size: 0.8rem;
  }
`;
const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 180px;

  background: ${({ theme }) => theme.colors.header.orange};
  backdrop-filter: ${({ theme }) => theme.glassBlur};
  border: ${({ theme }) => theme.glassBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.soft};

  list-style: none;
  padding: 0.5rem 0;
  margin-top: 5px;

  z-index: 2002;

  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
`;

const DropdownLink = styled(Link)<{ $active: boolean }>`
  display: block;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.brand.petrol};
  text-decoration: none;
  font-size: 0.9rem;
  font-family: ${({ theme }) => theme.fonts.text};

  background: ${({ $active, theme }) =>
    $active ? theme.colors.header.dropdownLink : "transparent"};

  font-weight: ${(props) => (props.$active ? "900" : "400")};

  border-left: 4px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.brand.green : "transparent"};

  &:hover {
    background: ${({ theme }) => theme.colors.brand.greyLight || "#f5f5f5"};

    color: ${({ theme }) => theme.colors.brand.green};

    padding-left: 25px;
  }
`;
