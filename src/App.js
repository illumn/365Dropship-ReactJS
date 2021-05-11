import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
    <Sidebar/>
      <div className="content">
      
      <Header />
     <div className="sort__section">
          <select id="sort">
            <option>Sort By: New Arrivals</option>
            <option value="asc">Price: High To Low</option>
            <option value="desc">Price: Low To Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
