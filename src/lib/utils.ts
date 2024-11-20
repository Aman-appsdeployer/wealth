import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const indianBasketsData = [
    [
        {
            name: "Divi's Labs",
            symbol: "DIVISLAB",
            image: "divis",
        },
        {
            name: "Dr Reddy's Labs",
            symbol: "DRREDDY",
            image: "drreddy",
        },
        {
            name: "Cipla",
            symbol: "CIPLA",
            image: "cipla",
        },
        {
            name: "Max Healthcare Institute",
            symbol: "MAXHEALTH",
            image: "max",
        },
        {
            name: "Syngene International",
            symbol: "SYNGENE",
            image: "syngene",
        },
        {
            name: "Granules India",
            symbol: "GRANULES",
            image: "granules",
        },
    ],
    [
        {
            name: "Infosys",
            symbol: "INFY",
            image: "infosys",
        },
        {
            name: "ABB India",
            symbol: "ABB",
            image: "abb",
        },
        {
            name: "Hindustan Unilever",
            symbol: "HINDUNILVR",
            image: "hul",
        },
        {
            name: "Asian Paints",
            symbol: "ASIANPAINT",
            image: "asian",
        },
        {
            name: "PI Industries",
            symbol: "PIIND",
            image: "pi",
        },
        {
            name: "Brittania Inds",
            symbol: "BRITTANIA",
            image: "britannia",
        },
        {
            name: "Eicher Motors",
            symbol: "EICHERMOT",
            image: "eicher",
        },
    ],
    [
        {
            name: "Hindustan Unilever",
            symbol: "HINDUNILVR",
            image: "hul",
        },
        {
            name: "Marico",
            symbol: "MARICO",
            image: "marico",
        },
        {
            name: "Cipla",
            symbol: "CIPLA",
            image: "cipla",
        },
        {
            name: "Dabur India",
            symbol: "DABUR",
            image: "dabur",
        },
        {
            name: "CL",
            symbol: "CL",
            image: "divis",
        },
        {
            name: "Gujarat Gas",
            symbol: "GUJGASLTD",
            image: "gujgas",
        },
        {
            name: "Brittania Inds",
            symbol: "BRITTANIA",
            image: "britannia",
        },
        {
            name: "Avenue Supermarkets",
            symbol: "DMART",
            image: "dmart",
        },
    ],
    [
        {
            name: "Reliance Industries",
            symbol: "RELIANCE",
            image: "reliance",
        },
        {
            name: "Asian Paints",
            symbol: "ASIANPAINT",
            image: "asian",
        },
        {
            name: "Petronet LNG",
            symbol: "PETRONET",
            image: "petronet",
        },
        {
            name: "Kajaria Ceramics",
            symbol: "KAJARIACER",
            image: "kajaria",
        },
        {
            name: "Carborundum Univer",
            symbol: "CARBORUNIV",
            image: "cumi",
        },
        {
            name: "Jamna Auto Inds",
            symbol: "JAMNAAUTO",
            image: "jamna",
        },
        {
            name: "APL Apollo Tubes",
            symbol: "APLAPOLLO",
            image: "apl",
        },
        {
            name: "Pheonix Mills",
            symbol: "PHOENIXLTD",
            image: "pheonix",
        },
        {
            name: "CRISIL",
            symbol: "CRISIL",
            image: "crisil",
        },
    ],
];

export const globalBasketsData = [
    [
        {
            name: "Apple Inc",
            symbol: "NASDAQ:AAPL",
            image: "apple",
        },
        {
            name: "Microsoft Corp",
            symbol: "NASDAQ:MSFT",
            image: "microsoft",
        },
        {
            name: "Coca-Cola",
            symbol: "NYSE:KO",
            image: "cocacola",
        },
        {
            name: "Alphabet Inc",
            symbol: "NASDAQ:GOOGL",
            image: "alphabet",
        },
        {
            name: "Nike Inc",
            symbol: "NYSE:NKE",
            image: "nike",
        },
        {
            name: "McDonald's Corp",
            symbol: "NYSE:MCD",
            image: "mcd",
        },
        {
            name: "Procter & Gamble",
            symbol: "NYSE:PG",
            image: "pg",
        },
        {
            name: "Exxon Mobil Corp",
            symbol: "NYSE:XOM",
            image: "exxon",
        },
        {
            name: "Merck & Co",
            symbol: "NYSE:MRK",
            image: "merck",
        },
        {
            name: "AMD",
            symbol: "NASDAQ:AMD",
            image: "amd",
        },
    ],
    [
        {
            name: "Pfizer Inc",
            symbol: "NYSE:PFE",
            image: "pfizer",
        },
        {
            name: "Rio Tento",
            symbol: "NYSE:RIO",
            image: "rio",
        },
        {
            name: "Shell PLC",
            symbol: "NYSE:SHEL",
            image: "shell",
        },
        {
            name: "Chevron Corp",
            symbol: "NYSE:CVX",
            image: "chevron",
        },
        {
            name: "Unilever PLC",
            symbol: "NYSE:UL",
            image: "unilever",
        },
        {
            name: "Newmont Corp",
            symbol: "NYSE:NEM",
            image: "newmont",
        },
    ],
    [
        {
            name: "Alphabet Inc",
            symbol: "NASDAQ:GOOGL",
            image: "alphabet",
        },
        {
            name: "Microsoft Corp",
            symbol: "NASDAQ:MSFT",
            image: "microsoft",
        },
        {
            name: "Apple Inc",
            symbol: "NASDAQ:AAPL",
            image: "apple",
        },
        {
            name: "AMD",
            symbol: "NASDAQ:AMD",
            image: "amd",
        },
        {
            name: "Tesla Inc",
            symbol: "NASDAQ:TSLA",
            image: "tesla",
        },
        {
            name: "TSMC",
            symbol: "NYSE:TSM",
            image: "tsmc",
        },
    ],
    [
        {
            name: "SPSK US Equity",
            symbol: "AMEX:SPSK",
            image: "",
        },
        {
            name: "ISDW LN Equity",
            symbol: "LSE:ISDW",
            image: "",
        },
        {
            name: "ISDE LN Equity",
            symbol: "LSE:ISDE",
            image: "",
        },
        {
            name: "PHAU LN Equity",
            symbol: "LSE:PHAU",
            image: "",
        },
    ],
];
