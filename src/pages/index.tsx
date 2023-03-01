import AppMenu from "@/components/appMenu";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>AnimationVariation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icons/favicon.ico" />
      </Head>
      <AppMenu />
    </>
  );
}
