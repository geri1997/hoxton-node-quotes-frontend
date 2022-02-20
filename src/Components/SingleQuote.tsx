import React, { useRef } from "react";
import { deleteQuote, patchAuthor, patchQuote } from "../api";

import { IQuote } from "../types";

const SingleQuote = ({ quote, setQuotes, ...props }: any) => {
   return (
      <li className="quote">
         <div
            style={{
               display: "grid",
               gridAutoFlow: "column",
               justifyContent: "flex-start",
               gap: "2rem",
            }}
            className="quote-text"
         >
            <h3>"{quote.text}"</h3>
            <button
               onClick={(e) => {
                  deleteQuote(quote.id);
                  setQuotes((prevQuotes: IQuote[]) =>
                     prevQuotes.filter((quot) => quot.id !== quote.id)
                  );
                  if (
                     document.location.href ===
                     "http://localhost:3000/quotes/" + quote.id
                  ) {
                     props.setSingleQuote(null);
                  }
                  if (props.randomQuote?.id === quote.id) {
                     props.setRandomQuote(null);
                  }
                  if (
                     props.searchedQuotes?.find(
                        (quot: IQuote) => quot.id === quote.id
                     )
                  ) {
                     const newSearchedQuotes = props.searchedQuotes.filter(
                        (sQuote: IQuote) => sQuote.id !== quote.id
                     );
                     props.setSearchedQuotes(newSearchedQuotes);
                  }
               }}
               style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "1rem",
                  cursor: "pointer",
               }}
            >
               X
            </button>
            <form
               onSubmit={(e) => {
                  e.preventDefault();
                  const formEl = e.target as HTMLFormElement & {
                     change: HTMLSelectElement;
                     value: HTMLInputElement;
                  };
                  const propToChange = {
                     [formEl.change.value]: formEl.value.value,
                  };

                  if (propToChange.text !== undefined) {
                     patchQuote(quote.id, propToChange);
                  } else {
                     patchAuthor(quote.id, propToChange);
                  }
                  if (propToChange.text !== undefined) {
                     setQuotes((prevQuotes: any) => {
                        const quotesCopy = JSON.parse(
                           JSON.stringify(prevQuotes)
                        );
                        const quoteMatch = quotesCopy.find(
                           (quot: any) => quot.id === quote.id
                        );
                        quoteMatch.text = propToChange.text;
                        console.log(propToChange.text);

                        return quotesCopy;
                     });
                  } else if (propToChange.age) {
                     if (
                        typeof parseInt(formEl.value.value) === "number" &&
                        !Number.isNaN(parseInt(formEl.value.value))
                     ) {
                        //@ts-ignore
                        const value = formEl.value.value;
                        const keyToChange = formEl.change.value;
                        setQuotes((prevQuotes: any) => {
                           const quotesCopy = JSON.parse(
                              JSON.stringify(prevQuotes)
                           );
                           const quoteMatch = quotesCopy.find(
                              (quot: any) => quot.id === quote.id
                           );
                           const ageVal = formEl.value.value;
                           //@ts-ignore
                           quoteMatch.author[keyToChange] = value;

                           //  console.log(quotesCopy);
                           return quotesCopy;
                        });
                     }
                  } else {
                     //@ts-ignore
                     const value = formEl.value.value;
                     const keyToChange = formEl.change.value;
                     setQuotes((prevQuotes: any) => {
                        const quotesCopy = JSON.parse(
                           JSON.stringify(prevQuotes)
                        );
                        const quoteMatch = quotesCopy.find(
                           (quot: any) => quot.id === quote.id
                        );
                        quoteMatch.author[keyToChange] = value;

                        // console.log(quotesCopy);
                        return quotesCopy;
                     });
                  }
                  formEl.reset();
               }}
            >
               <select name="change" id="">
                  <option value="text">Text</option>
                  <option value="firstName">First Name</option>
                  <option value="lastName">Last Name</option>
                  <option value="photo">Photo</option>
                  <option value="age">Age</option>
                  <option value="bio">Bio</option>
               </select>
               <input name="value" type="text" />
               <button type="submit">Change</button>
            </form>
         </div>
         <div className="authorInfo">
            - <img src={quote.author.photo} alt="" />
            <h4>{quote.author.firstName + " " + quote.author.lastName}</h4>
            <span>
               {quote.author.firstName !== "Not" ? quote.author.age : "Not 24"}
            </span>
            <p>{quote.author.bio}</p>
         </div>
      </li>
   );
};

export default SingleQuote;
