import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/Aside";
import { useState, useEffect } from "react";
function App() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="content">
      <Sidebar />
      <Aside />

      <Header
        products={products}
        setProducts={setProducts}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        result={result}
        setResult={setResult}
      />
      <Main
        products={products}
        setProducts={setProducts}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
      />
    </div>
  );
}

export default App;
