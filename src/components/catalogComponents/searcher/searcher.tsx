import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
// import searchIcon from "./assets/icons/searchIcon.png";
import classes from "@/styles/Searcher.module.css";
import cn from "classnames";
import Image from "next/image";
interface SearcherProps {
  inputValue?: string;
  onChangeInputValue?: (value: string) => void;
}
const Searcher: React.FC<SearcherProps> = ({
  inputValue,
  onChangeInputValue,
}) => {
  const [searcherValue, setSearcherValue] = useState(inputValue);
  const [isSearcherActive, setIsSearcherActive] = useState(false);

  const onSetSearcherValue = (value: string) => {
    setSearcherValue(value);
    onChangeInputValue && onChangeInputValue(value);
  };

  const onOpenSearcher = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsSearcherActive(true);
  };
  const onReturnBtn = () => {
    setIsSearcherActive(false);
  };
  return (
    <form className={cn(classes.searcherContainer)}>
      {isSearcherActive ? (
        <div
          className={cn(classes.inputContainer, {
            [classes.activeSearcher]: isSearcherActive,
          })}
        >
          <input
            type="text"
            value={searcherValue}
            placeholder="Поиск"
            className={cn(classes.inputBlock)}
            onChange={(e) => onSetSearcherValue(e.target.value)}
          />
          <div className={classes.searcherIconBlock}>
            <Image
              width={40}
              height={40}
              src={"/assets/icons/searchIcon.png"}
              alt="searchIcon"
              className={cn(classes.searcherIcon)}
              onClick={onReturnBtn}
            />
          </div>
        </div>
      ) : (
        <input
          type="button"
          onClick={(e) => onOpenSearcher(e)}
          value="Поиск"
          className={cn(classes.searcherBtn, {
            [classes.activeBtn]: !isSearcherActive,
          })}
        />
      )}
    </form>
  );
};
export default Searcher;
