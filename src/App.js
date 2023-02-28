import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      hello
      <Routes> 
            <Route path="/" element={<Home/> } /> 
            <Route path="/about" element={<About/> } /> 
       </Routes> 
    </div>
  );
}

export default App;
