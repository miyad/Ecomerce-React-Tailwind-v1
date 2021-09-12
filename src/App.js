import React from "react";

import { useEffect, useState } from 'react';


import { GlobalContextProvider } from "./GlobalContext/GlobalContext";
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
