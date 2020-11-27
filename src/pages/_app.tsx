import React, { ReactElement } from "react";
import { AppProps } from "next/app";
import '../theme/styles.scss';

const SnailbitesApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return <Component {...pageProps} />
}

export default SnailbitesApp
