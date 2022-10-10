import React from "react";
import { RecoilRoot } from "recoil";
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { NextPageContext } from "next/types";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme } from "jci-moyeo-design-system";

type PageProps = {
  dehydratedState?: DehydratedState;
};

type ExtendedAppProps<P = unknown> = {
  err?: NextPageContext["err"];
} & AppProps<P>;

function MoyeoApp({ Component, pageProps }: ExtendedAppProps<PageProps>) {
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
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MoyeoApp;
