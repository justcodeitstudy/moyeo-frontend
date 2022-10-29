import React from "react";
import { RecoilRoot } from "recoil";
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme } from "jci-moyeo-design-system";
import Layout from "layouts/Layout";
import "../styles/toastui.css";

function MoyeoApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState?: DehydratedState }>) {
  const { dehydratedState, ...rest } = pageProps;
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <RecoilRoot>
            <Layout>
              <Component {...rest} />
            </Layout>
          </RecoilRoot>
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MoyeoApp;
