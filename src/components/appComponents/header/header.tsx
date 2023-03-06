import Searcher from "@/components/catalogComponents/searcher";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <header>
      <Searcher inputValue={searchValue} onChangeInputValue={setSearchValue} />
      <Link href="/" className="appName">
        <span className="firstText">Animation</span>
        <span className="secondText">Variation</span>
      </Link>
    </header>
  );
};
export default Header;
