import { useEffect, useState } from "react";
import { fetchQuotes, fetchRandomQuote } from "./api";
import SingleQuote from "./Components/SingleQuote";
import { IQuote } from "./types";

function App() {
  const [quotes, setQuotes] = useState<IQuote[]>([]);
  const [randomQuote, setRandomQuote] = useState<IQuote | null>(null);

  useEffect(() => {
    fetchQuotes().then((serverQuotes) => setQuotes(serverQuotes));
  }, []);

  return (
    <>
      <ul className="quote-list">
        {quotes.map(({ id, text, author }) => (
          <SingleQuote key={id} text={text} author={author} />
        ))}
      </ul>
      <h2>Random Quote</h2>
      <button
        onClick={(e) =>
          fetchRandomQuote().then((quote) => setRandomQuote(quote))
        }
      >
        Get random quote
      </button>
      {randomQuote && <SingleQuote text={randomQuote.text} author={randomQuote.author} />}
    </>
  );
}

export default App;
