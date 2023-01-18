import * as React from "react";
import './styles.css';
interface Props {
    placeHolder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare function SearchBar({ placeHolder, onChange }: Props): JSX.Element;
export {};
