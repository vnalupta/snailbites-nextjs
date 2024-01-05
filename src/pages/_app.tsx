import React, { ReactElement, useEffect } from "react";
import { AppProps } from "next/app";
import '../theme/styles.scss';
import Layout from "@components/layout";
import Navigation from "@components/navigation";

const SnailbitesApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <h1>hi</h1>
      {/* <Layout> */}
        <>
          <Navigation />
          <Component {...pageProps} key={router.route} />
        </>
      {/* </Layout> */}
    </>
  )
}

export default SnailbitesApp
