import styled from "styled-components";

export type TooltipPosition = "top" | "bottom";
export type TooltipAlign = "left" | "center" | "right";

interface StyledContainerProps {
  $text: string;
  $align: TooltipAlign;
  $position: TooltipPosition;
}

export const TooltipContainer = styled.div<StyledContainerProps>`
  position: relative;
  display: inline-flex;
  align-items: center;

  &::after {
    content: "${(props) => props.$text}";
    position: absolute;
    z-index: 9999;

    ${(props) =>
      props.$position === "bottom"
        ? "top: 140%; bottom: auto;"
        : "bottom: 140%; top: auto;"}

    ${(props) => {
      if (props.$align === "left")
        return "right: 0; left: auto; transform: none;";
      if (props.$align === "right")
        return "left: 0; right: auto; transform: none;";
      return "left: 50%; transform: translateX(-50%);";
    }}
    
    background-color: ${({ theme }) => theme.colors.brand.petrolDarker};
    color: ${({ theme }) => theme.colors.ui.surface};
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 0.8rem;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease;
    pointer-events: none;

    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 9999;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;

    ${(props) =>
      props.$position === "bottom"
        ? "top: 110%; border-bottom-color: ${({ theme }) => theme.colors.brand.petrolDarker};"
        : "bottom: 110%; border-top-color: ${({ theme }) => theme.colors.brand.petrolDarker};"}

    opacity: 0;
    visibility: hidden;
  }

  &:hover::after,
  &:hover::before {
    opacity: 1;
    visibility: visible;
  }
`;
