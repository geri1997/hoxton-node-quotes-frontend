export interface IQuote {
    id:number
    text:string
    author:Author
}

export interface Author{
    age:number
    firstName:string
    lastName:string
    photo:string
}