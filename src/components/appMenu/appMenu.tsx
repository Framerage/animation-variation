import React, { useState } from "react";
import classes from "@/styles/AppMenu.module.css";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
const AppMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { name: "Home", image: "/assets/images/homeBtn.png", link: "" },
    { name: "Catalog", image: "/assets/images/catalogBtn.png", link: "" },
    { name: "Some", image: "/assets/images/menuBtn.png", link: "" },
    { name: "Ideas", image: "/assets/images/ideasBtn.png", link: "" },
    { name: "Games", image: "/assets/images/gamesBtn.png", link: "" },
    { name: "Statistic", image: "/assets/images/statisticBtn.png", link: "" },
    { name: "Reviews", image: "/assets/images/reviewsBtn.png", link: "" },
    { name: "Contacts", image: "/assets/images/contactsBtn.png", link: "" },
  ];
  const onUseMenu = () => setIsMenuOpen(!isMenuOpen);

  const iconStyle = (elem: number) => {
    return {
      transitionDelay: `calc(0.1s*${elem}`,
      transform: isMenuOpen
        ? `rotate(calc(360deg / ${menuItems.length} * ${elem + 2}))`
        : "rotate(0deg) translateX(150px)",
    };
  };
  const imageStyle = (elem: number) => {
    return {
      transform: `rotate(calc(360deg / ${-menuItems.length} * ${elem + 2}))`,
    };
  };
  return (
    <div className={classes.menuContainer}>
      <nav className={classes.navContainer}>
        <div
          className={cn(classes.menuToggle, {
            [classes.activeToggle]: isMenuOpen,
          })}
          onClick={onUseMenu}
        >
          <Image
            src={"/assets/images/menuBtn.png"}
            alt="menuItem"
            width={150}
            height={150}
            className={classes.toggleImage}
          />
        </div>
        {menuItems.map((item, index) => (
          <Link
            href={item.link}
            key={item.name}
            className={cn(classes.menuItem, {
              [classes.activeMenu]: isMenuOpen,
            })}
            style={iconStyle(index)}
          >
            <Image
              src={item.image}
              alt="menuItem"
              width={50}
              height={50}
              style={imageStyle(index)}
            />
          </Link>
        ))}
      </nav>
    </div>
  );
};
export default AppMenu;
