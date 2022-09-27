import React from "react";
import type { AppProps } from "next/app";
import { RecoilRoot } from 'recoil';

function MoyeoApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MoyeoApp;
