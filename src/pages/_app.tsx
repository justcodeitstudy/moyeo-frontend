import React from "react";
import type { AppProps } from "next/app";

function MoyeoApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MoyeoApp;
