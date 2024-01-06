import React from "react";
import { AppProps } from "next/app";
import Navigation from "@components/navigation";

import '../theme/normalize.css'
import '../theme/styles.scss';

const SnailbitesApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
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
