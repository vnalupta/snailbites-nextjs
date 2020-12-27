import React, { ReactElement, useEffect } from "react";
import { AppProps } from "next/app";
import '../theme/styles.scss';
import Layout from "../components/layout";

const SnailbitesApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}

export default SnailbitesApp
