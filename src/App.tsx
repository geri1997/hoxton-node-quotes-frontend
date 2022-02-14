import "../src/styles/index.css";
import { Navigate, Route, Router, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";

import { IQuote } from "./types";
import { fetchQuotes } from "./api";
import SingleQuotePage from "./Pages/SingleQuotePage";

function App() {
  return (
    <Routes>
      <Route index element={<Navigate replace to="/quotes" />} />
      <Route path="/quotes" element={<Home />} />
      <Route path="/quotes/:id" element={<SingleQuotePage />} />
    </Routes>
  );
}

export default App;
