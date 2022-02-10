import { useEffect, useState } from "react";
import { fetchQuotes } from "./api";
import { IQuote } from "./types";

function App() {
  const [quotes, setQuotes] = useState<IQuote[]>([]);

  useEffect(() => {
    fetchQuotes().then((serverQuotes) => setQuotes(serverQuotes));
  }, []);

  return (
    <>
      <ul className="quote-list">
        {quotes.map((quote) => (
          <li>
            <h3>bla bl bla bla bla bla bla</h3>
            <h4>- Geri Luga</h4>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
