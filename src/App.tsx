import ListingCardContainer from "./components/ListingCardContainer/ListingCardContainer";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import InputCsv from "./components/InputCsv/InputCsv";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // csvData is an Array of Objects
  // each object contains key/value pairs of car listing data
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    console.log("csvData", csvData);
  }, [csvData]);

  return (
    <div className="App">
      <InputCsv setCsvData={setCsvData} />
      <ListingCardContainer csvData={csvData} />
    </div>
  );
}

export default App;
