import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import Main from "./Components/Main/Main";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="content">
      <Sidebar />
      <Header
        data={data}
        setData={setData}
        allData={allData}
        setAllData={setAllData}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        result={result}
        setResult={setResult}
      />
      <Main
        data={data}
        setData={setData}
        allData={allData}
        setAllData={setAllData}
      />
    </div>
  );
}

export default App;
