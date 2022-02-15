import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleQuote } from "../api";
import SingleQuote from "../Components/SingleQuote";
import { IQuote } from "../types";

type Props={
  setQuotes:any
}

const SingleQuotePage = ({setQuotes}:Props) => {
  const params = useParams();
  const [singleQuote, setSingleQuote] = useState<null|IQuote>(null)

  useEffect(() => {
    if (params.id) fetchSingleQuote(params.id).then(serverQuote=>setSingleQuote(serverQuote))
  }, []);

  if (singleQuote) {
    return (
      <div>
        <SingleQuote setQuotes={setQuotes} quote={singleQuote} setSingleQuote={setSingleQuote}/>
      </div>
    );
  }
  return <h2>Quote not found</h2>;
};

export default SingleQuotePage;
