import React, { useEffect } from "react";
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
import "../styles/toastui.css";
import { NextPage, NextPageContext } from "next";
import { GlobalModal } from "components/common/Modal";

declare global {
  interface Window {
    Kakao: any;
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = {
  err?: NextPageContext["err"];
} & AppProps<{
  dehydratedState?: DehydratedState;
}> & {
    Component: NextPageWithLayout;
  };

function MoyeoApp({ Component, pageProps }: AppPropsWithLayout) {
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

  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_KEY;
    if (kakaoKey && Kakao && !Kakao.isInitialized()) {
      Kakao.init(kakaoKey);
    }
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <RecoilRoot>
            {getLayout(<Component {...rest} />)}
            <GlobalModal />
          </RecoilRoot>
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MoyeoApp;
