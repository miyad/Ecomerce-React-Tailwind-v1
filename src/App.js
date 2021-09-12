import React from "react";

import { useEffect, useState } from 'react';
import './App.css';

import Home from "./Components/Home/Home";
import { GlobalContextProvider } from "./Components/GlobalContext/GlobalContext";
import Parent from "./Components/Parent/Parent";

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <GlobalContextProvider>
      <Parent/>
    </GlobalContextProvider>
  );
}

export default App;
