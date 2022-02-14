import React from "react";


import { IQuote } from "../types";

type Props={
  quote:IQuote
}

const SingleQuote = ({quote}: Props) => {
  
  
  return (
    <li className="quote">
      <h3>"{quote.text}"</h3>
      <div className="authorInfo">
        - <img src={quote.author.photo} alt="" />
        <h4>{quote.author.firstName +' ' + quote.author.lastName}</h4>
        <span>{quote.author.age}</span>
      </div>

    </li>
  );
};

export default SingleQuote;
