import { ChangeEvent } from "react";
import "./serach-box.styles.css";

/* 
type CanadianAddress = {
  street: string;
  province: string;
};

type USAddress = {
  street: string;
  state: string;
};

type NorthAmericanAddress = CanadianAddress | USAddress; //union type, so address now can represent both a street and it can have a state or province

const Address: NorthAmericanAddress = {
  street: "",
  state: "",
  province: "",
}; */

/* interface ISearchBoxProps {
  className: string;
  placeholder?: string; // ? means to either expect string or null, this parameter is OPTIONAL
}

interface IChangeHandlerProps {
  onChangeHandler: (a: string) => void;
} */

type SearchBoxProps = {
  //with types we are allowed to do UNIONS ON THEM
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void; // or we can use: onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
