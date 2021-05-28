import "./main.css";
import { useState, useEffect } from "react";
import Catalog from "../Catalog/Catalog";

const Main = ({ data, setData, allData, setAllData }) => {
  return (
    <main className="main">
      <Catalog
        data={data}
        setData={setData}
        allData={allData}
        setAllData={setAllData}
      />
    </main>
  );
};

export default Main;
