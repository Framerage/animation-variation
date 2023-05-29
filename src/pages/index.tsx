import AppMenu from "@/components/catalogComponents/appMenu";
import Head from "next/head";

export default function Home() {
  const menuItems = [
    {
      name: "Catalog",
      image: "/assets/images/catalogBtn.png",
      link: "/catalog",
    },
    { name: "Ideas", image: "/assets/images/ideasBtn.png", link: "" },
    { name: "About", image: "/assets/images/aboutBtn.png", link: "/about" },
    { name: "Contacts", image: "/assets/images/contactsBtn.png", link: "" },
    { name: "System", image: "/assets/images/systemBtn.png", link: "/systems" },

    {
      name: "Reviews",
      image: "/assets/images/reviewsBtn.png",
      link: "/reviews",
    },
    {
      name: "Statistic",
      image: "/assets/images/statisticBtn.png",
      link: "/statistic",
    },
    { name: "Games", image: "/assets/images/gamesBtn.png", link: "/games" },
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
