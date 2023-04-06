import React, { useState } from "react";
import classes from "@/styles/catalogComponents/AppMenu.module.css";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import { Tooltip } from "@material-ui/core";
interface AppMenuProps {
  menuItems?: { name: string; image: string; link: string }[];
}
const AppMenu: React.FC<AppMenuProps> = ({ menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onUseMenu = () => setIsMenuOpen(!isMenuOpen);
  const defaultMenuItems = [
    { name: "1", image: "/assets/images/defaultImg.png", link: "/" },
    { name: "2", image: "/assets/images/defaultImg.png", link: "/" },
    { name: "3", image: "/assets/images/defaultImg.png", link: "/" },
    { name: "4", image: "/assets/images/defaultImg.png", link: "/" },
    { name: "5", image: "/assets/images/defaultImg.png", link: "/" },
    { name: "6", image: "/assets/images/defaultImg.png", link: "/" },
    { name: "7", image: "/assets/images/defaultImg.png", link: "/" },
    { name: "8", image: "/assets/images/defaultImg.png", link: "/" },
  ];
  const itemsAmount = menuItems ? menuItems.length : defaultMenuItems.length;
  const itemsContant = menuItems ? menuItems : defaultMenuItems;

  const iconStyle = (elem: number) => {
    return {
      transitionDelay: `calc(0.1s*${elem}`,
      transform: isMenuOpen
        ? `rotate(calc(360deg / ${itemsAmount} * ${elem + 2}))`
        : "rotate(0deg) translateX(150px)",
    };
  };
  const imageStyle = (elem: number) => {
    return {
      transform: `rotate(calc(360deg / ${-itemsAmount} * ${elem + 2}))`,
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
        {itemsContant.map((item, index) => (
          <Link
            href={item.link}
            key={item.name + ":" + index}
            className={cn(classes.menuItem, {
              [classes.activeMenu]: isMenuOpen,
            })}
            style={iconStyle(index)}
          >
            <Tooltip className={classes.itemTooltip} title={item.name}>
              <Image
                src={item.image}
                alt="menuItem"
                width={50}
                height={50}
                style={imageStyle(index)}
              />
            </Tooltip>
          </Link>
        ))}
      </nav>
    </div>
  );
};
export default AppMenu;
