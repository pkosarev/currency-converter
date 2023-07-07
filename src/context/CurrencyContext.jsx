import { createContext, useState } from "react"

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [fromCurrency, setFromCurrency] = useState("🇷🇺 RUB - Russia");
  const [toCurrency, setToCurrency] = useState("🇺🇲 USD - United States");
  const [firstAmount, setFirstAmount] = useState("");
  const codeFromCurrency = fromCurrency.split(" ")[1];
  const codeToCurrency = toCurrency.split(" ")[1];
  const [resultCurrency, setResultCurrency] = useState("");

  const value = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
    setFirstAmount,
    codeFromCurrency,
    codeToCurrency,
    resultCurrency,
    setResultCurrency
  };
  return (
    <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
  )
}

export default CurrencyProvider