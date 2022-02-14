import React from "react";
import { useEffect, useState } from "react";
import { createQuote, fetchQuotes, fetchRandomQuote } from "../api";
import SingleQuote from "../Components/SingleQuote";
import { IQuote } from "../types";

type Props = {
  quotes: IQuote[];
};

const Home = ({ quotes }: Props) => {
  const [randomQuote, setRandomQuote] = useState<IQuote | null>(null);
  const [searchedQuotes, setSearchedQuotes] = useState<IQuote[]>([]);
  const [formData, setFormData] = useState({
    text: "",
    author: {
      firstName: "",
      lastName: "",
      age: Number(''),
      photo: "",
    },
  });

  function handleChange(e: { target: { name: any; value: any } }) {
    if (e.target.name === "text") {
      setFormData((formData) => ({ ...formData, text: e.target.value }));
    } else {
      setFormData((formData) => {
        return {
          ...formData,
          author: { ...formData.author, [e.target.name]: e.target.value },
        };
      });
    }
  }
  function handleSubmit(e: { preventDefault: () => void; }){
    e.preventDefault()
    createQuote(formData)
  }

  return (
    <>
      <ul className="quote-list">
        {quotes.map((quote) => (
          <SingleQuote key={quote.id} quote={quote} />
        ))}
      </ul>
      <h2>Add new quote</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          onChange={handleChange}
          type="text"
          name="firstName"
          id="firstName"
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          onChange={handleChange}
          type="text"
          name="lastName"
          id="lastName"
        />
        <label htmlFor="age">Age:</label>
        <input onChange={handleChange} type="text" name="age" id="age" />
        <label htmlFor="photo">Photo:</label>
        <input onChange={handleChange} type="text" name="photo" id="photo" />
        <label htmlFor="text">Text:</label>
        <input onChange={handleChange} type="text" name="text" id="text" />
        <button type="submit">Create</button>
      </form>
      <h2>Random Quote</h2>
      <button
        onClick={(e) =>
          fetchRandomQuote().then((quote) => setRandomQuote(quote))
        }
      >
        Get random quote
      </button>
      {randomQuote && <SingleQuote quote={randomQuote} />}
      <h2>Search</h2>
      <form
        onSubmit={(e) => {
          const formEl = e.target as HTMLFormElement & {
            text: HTMLInputElement;
            author: HTMLInputElement;
          };
          e.preventDefault();
          console.log(
            "http://localhost:3009/quotes?textQ=" +
              formEl.text.value +
              "&authorQ=" +
              formEl.author.value
          );
          fetch(
            "http://localhost:3009/quotes?textQ=" +
              formEl.text.value.toLowerCase() +
              "&authorQ=" +
              formEl.author.value.toLowerCase()
          )
            .then((res) => res.json())
            .then((serverSearchedQuotes) => {
              setSearchedQuotes(serverSearchedQuotes);
            });
        }}
      >
        <label htmlFor="text">Quote</label>
        <input type="text" id="text" name="text" />
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" />
        <button type="submit">Search</button>
      </form>
      <ul className="quote-list">
        {searchedQuotes.map((quote) => (
          <SingleQuote key={"search" + quote.id} quote={quote} />
        ))}
      </ul>
    </>
  );
};

export default Home;
