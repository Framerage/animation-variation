import AppMenu from "@/components/catalogComponents/appMenu";
import Head from "next/head";

export default function Home() {
  const menuItems = [
    { name: "Home", image: "/assets/images/homeBtn.png", link: "" },
    {
      name: "Catalog",
      image: "/assets/images/catalogBtn.png",
      link: "/catalog",
    },
    { name: "About", image: "/assets/images/aboutBtn.png", link: "/about" },
    { name: "Ideas", image: "/assets/images/ideasBtn.png", link: "" },
    { name: "Games", image: "/assets/images/gamesBtn.png", link: "" },
    { name: "Statistic", image: "/assets/images/statisticBtn.png", link: "" },
    { name: "Reviews", image: "/assets/images/reviewsBtn.png", link: "" },
    { name: "Contacts", image: "/assets/images/contactsBtn.png", link: "" },
  ];
  return (
    <>
      <Head>
        <title>AnimationVariation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icons/favicon.ico" />
      </Head>
      <AppMenu menuItems={menuItems} />
    </>
  );
}
