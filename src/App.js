import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import Main from "./Components/Main/Main";
import { useState, useEffect } from "react";

function App() {
  const[data, setData] = useState([]);
  return (
    <div className="content">
      <Sidebar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
