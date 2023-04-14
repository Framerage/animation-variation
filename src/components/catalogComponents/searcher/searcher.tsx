import React, { ChangeEvent, FormEvent, useState } from "react";
import classes from "@/styles/catalogComponents/Searcher.module.css";
import cn from "classnames";
import Image from "next/image";
interface SearcherProps {
  inputValue?: string;
  onChangeInputValue?: (value: string) => void;
  onSearchItem?: (value: string) => void;
}
const Searcher: React.FC<SearcherProps> = ({
  inputValue,
  onChangeInputValue,
  onSearchItem,
}) => {
  const [searcherValue, setSearcherValue] = useState(inputValue);
  const [isSearcherActive, setIsSearcherActive] = useState(false);

  const onSetSearcherValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearcherValue(e.target.value);
    onChangeInputValue && onChangeInputValue(e.target.value);
  };

  const onOpenSearcher = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsSearcherActive(true);
  };
  const onReturnBtn = () => {
    setIsSearcherActive(false);
  };
  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (!onSearchItem) {
      return;
    }
    searcherValue && onSearchItem(searcherValue);
  };
  return (
    <form
      className={cn(classes.searcherContainer)}
      onSubmit={(e) => handleSubmit(e)}
    >
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
            onChange={(e) => onSetSearcherValue(e)}
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
