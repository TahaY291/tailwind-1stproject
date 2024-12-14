import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search74.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]); // renamed to `results` to match `Results.jsx`
  const [loading, setLoading] = useState(false); // renamed to `loading` to match `Results.jsx`
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setLoading(true);

    try {
      const response = await fetch(`${baseUrl}${type}`, {
        method: 'GET',
        headers: {
          "User-Agent": "desktop", // renamed and corrected header key
          "x-rapidapi-host": "google-search74.p.rapidapi.com",
          "x-rapidapi-key": "e1d2765b72msh16b7bf00657031fp1dfb09jsn182118a1032b",
        },
      });

      const data = await response.json();
      setResults(data); // updated to `setResults` to match `results` state
    } catch (error) {
      console.error("Error fetching results:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ResultContext.Provider value={{ getResu
