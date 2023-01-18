import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import './styles.css';
export function SearchBar({ placeHolder, onChange }) {
    return (React.createElement("div", { className: "search-bar-container" },
        React.createElement("input", { className: "search-bar-input", onChange: onChange, placeholder: placeHolder }),
        React.createElement(FontAwesomeIcon, { className: "search-bar-icon", icon: faMagnifyingGlass })));
}
