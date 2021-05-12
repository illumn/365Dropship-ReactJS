import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Header />
      </div>
    </div>
  );
}

export default App;
