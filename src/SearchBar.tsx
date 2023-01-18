import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import './styles.css';

interface Props {
  placeHolder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBar({ placeHolder, onChange }: Props) {
  return (
    <div className="search-bar-container">
      <input className="search-bar-input" onChange={onChange} placeholder={placeHolder}/>
      <FontAwesomeIcon className="search-bar-icon" icon={faMagnifyingGlass}></FontAwesomeIcon>
    </div>
  );
}
