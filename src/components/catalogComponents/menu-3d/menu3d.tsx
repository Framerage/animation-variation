import React from "react";
import classes from "@/styles/catalogComponents/Menu-3d.module.css";
import Link from "next/link";
const defaultMenuItems = [
  { title: "link", link: "", style: { pointerEvents: "none" } },
  { title: "link", link: "", style: { pointerEvents: "none" } },
  { title: "link", link: "", style: { pointerEvents: "none" } },
  { title: "link", link: "", style: { pointerEvents: "none" } },
];
const Menu3d = ({
  menuItems = defaultMenuItems,
}: {
  menuItems?: { title: string; link: string; style?: any }[];
}) => {
  const itemsCount = menuItems.length;

  const itemZindex = (index: number) => {
    return {
      zIndex: itemsCount - index,
    };
  };
  return (
    <div className={classes.menu3dContainer}>
      <ul className={classes.menuBlock}>
        {menuItems.map((item, index) => (
          <li
            key={item.title + index}
            className={classes.menuItem}
            style={itemZindex(index)}
          >
            <Link
              href={item.link}
              className={classes.itemLink}
              style={item.style}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Menu3d;
