import React from "react";
import { IQuote } from "../types";

type Props={
  text:string
  author:string
}

const SingleQuote = ({text,author}:Props) => {
  return (
    <li>
      <h3>{text}</h3>
      <h4>- {author}</h4>
    </li>
  );
};

export default SingleQuote;
