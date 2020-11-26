import React, { ReactElement } from "react";
import { AppProps } from "next/app";

const SnailbitesApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return <Component {...pageProps} />
}

export default SnailbitesApp
