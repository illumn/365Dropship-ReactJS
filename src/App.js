import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Header />
        <Main/>
      </div>
    </div>
  );
}

export default App;
