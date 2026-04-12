"use client";

import styled from "styled-components";
import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
}

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: auto;
  margin-bottom: 10px;

  padding: 20px 20px;
  background-color: ${({ theme }) => theme.colors.brand.lime};
  border: 2px solid ${({ theme }) => theme.colors.brand.petrolDark};
  border-radius: ${({ theme }) => theme.borderRadius};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 40px;
  }
`;
