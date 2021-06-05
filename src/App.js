import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/Aside";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [fetchedProducts,setFetchedProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

 

  return (
    <div className="content">
      <Sidebar />
      <Aside />
      
      <Header
        products={products}
        setProducts={setProducts}
        fetchedProducts={fetchedProducts}
        setFetchedProducts={setFetchedProducts}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchResult={searchResult}
        setSearchResult={setSearchResult}
      />
      <Main
        products={products}
        setProducts={setProducts}
        fetchedProducts={fetchedProducts}
        setFetchedProducts={setFetchedProducts}
      />
    </div>
  );
}

export default App;
