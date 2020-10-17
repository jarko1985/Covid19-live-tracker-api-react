import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import CharacterGrid from "./components/CharacterGrid";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
        method: "GET",
        url: "https://api.covid19api.com/summary",
      });

      console.log(result.data.Countries);
      setItems(result.data.Countries);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

//Hassan was here
export default App;
