import { useEffect, useState } from "react";
import { fetchQuotes } from "./api";
import SingleQuote from "./Components/SingleQuote";
import { IQuote } from "./types";

function App() {
  const [quotes, setQuotes] = useState<IQuote[]>([]);

  useEffect(() => {
    fetchQuotes().then((serverQuotes) => setQuotes(serverQuotes));
  }, []);

  return (
    <>
      <ul className="quote-list">
        {quotes.map(({id,text,author}) => <SingleQuote key={id} text={text} author={author}/>
          
        )}
      </ul>
    </>
  );
}

export default App;
