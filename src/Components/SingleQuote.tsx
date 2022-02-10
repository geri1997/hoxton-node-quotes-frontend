import React from "react";
import { IQuote } from "../types";

type Props={
  text:string
  author:string
}

const SingleQuote = ({text,author}:Props) => {
  return (
    <li>
      <h3>bla bl bla bla bla bla bla</h3>
      <h4>- Geri Luga</h4>
    </li>
  );
};

export default SingleQuote;
