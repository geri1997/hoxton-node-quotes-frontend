import { IQuote } from "./types"

export {}

const quotesEndpoint= 'http://localhost:3009/quotes/'

export function fetchQuotes():Promise<IQuote[]>{
    return fetch(quotesEndpoint).then(res=>res.json())
}