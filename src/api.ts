import { IQuote } from "./types";

const quotesEndpoint = "http://localhost:3009/quotes/";
const randomQuoteEndpoint = "http://localhost:3009/random/";

export function fetchQuotes(): Promise<IQuote[]> {
  return fetch(quotesEndpoint).then((res) => res.json());
}

export function fetchRandomQuote() {
  return fetch(randomQuoteEndpoint).then((res) => res.json());
}
