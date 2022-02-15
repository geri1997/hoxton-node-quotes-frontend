import { Author, IQuote } from "./types";

const quotesEndpoint = "http://localhost:3009/quotes/";
const randomQuoteEndpoint = "http://localhost:3009/random/";

export function fetchQuotes(): Promise<IQuote[]> {
  return fetch(quotesEndpoint).then((res) => res.json());
}

export function fetchRandomQuote() {
  return fetch(randomQuoteEndpoint).then((res) => res.json());
}

export function createQuote(quote: {
  text: string;
  author: {
    firstName: string;
    lastName: string;
    age: string;
    photo: string;
    bio: string;
  };
}) {
  return fetch(quotesEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(quote),
  }).then((res) => res.json());
}

export function fetchSingleQuote(id: string) {
  return fetch(quotesEndpoint + id).then((res) => res.json());
}

export function deleteQuote(id: number) {
  fetch(quotesEndpoint + id, { method: "DELETE" }).then((res) => res.json());
}

export function patchQuote(id: string | number, obj: {}) {
  return fetch(quotesEndpoint + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then((res) => res.json());
}
