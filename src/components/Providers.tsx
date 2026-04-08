"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";
import { ThemeProvider } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "@/styles/styles";

import "react-toastify/dist/ReactToastify.css";
import "flag-icons/css/flag-icons.min.css";
import { theme } from "@/styles/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
          }}
        >
          {children}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            theme="colored"
            style={{ zIndex: 99999 }}
          />
        </SWRConfig>
      </ThemeProvider>
    </SessionProvider>
  );
}
