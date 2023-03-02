import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <input type="text" />
      <Link href="/" className="appName">
        <span className="firstText">Animation</span>
        <span className="secondText">Variation</span>
      </Link>
    </header>
  );
};
export default Header;
