import "../src/styles/index.css";
import { Navigate, Route, Router, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";

import { IQuote } from "./types";
import { fetchQuotes } from "./api";
import SingleQuotePage from "./Pages/SingleQuotePage";

function App() {
  const [quotes, setQuotes] = useState<IQuote[]>([]);
  useEffect(() => {
    fetchQuotes().then((serverQuotes) => setQuotes(serverQuotes));
  }, []);
  return (
    <Routes>
      <Route index element={<Navigate replace to="/quotes" />} />
      <Route path="/quotes" element={<Home quotes={quotes} setQuotes={setQuotes}/>} />
      <Route path="/quotes/:id" element={<SingleQuotePage setQuotes={setQuotes} />} />
    </Routes>
  );
}

export default App;
