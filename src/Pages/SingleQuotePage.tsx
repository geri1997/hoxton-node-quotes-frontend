import React from "react";
import { useParams } from "react-router-dom";
import SingleQuote from "../Components/SingleQuote";
import { IQuote } from "../types";

type Props = {
  quotes: IQuote[];
};

const SingleQuotePage = ({ quotes }: Props) => {
  const params = useParams();

  const quote = quotes.find((quot) => quot.id === Number(params.id));

  if (quote !== undefined) {
    return (
      <div>
        <SingleQuote quote={quote} />
      </div>
    );
  }
  return <h2>Quote not found</h2>;
};

export default SingleQuotePage;
