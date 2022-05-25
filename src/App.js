import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Nav.js';
import Home from "./Home"
import Login from './Login.js'
import Logado from "./Logado"
import Quis from "./Quis"
import Quiz from "./Quiz"
import Errado from "./Errado"
import Correto from "./Correto"
import Errado2 from "./Errado2"
import Correto2 from "./Correto2"
import Quiz2 from "./Quiz2"
import Quiz3 from "./Quiz3"
import Acabou from "./Acabou.js"

function App() {
  return (
  <BrowserRouter>
    <nav>
      <Navbar></Navbar>
    </nav>
    <Routes>
      
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logado" element={<Logado/>}></Route>
        <Route path="/quis" element={<Quis/>}></Route>
        <Route path="/quiz" element={<Quiz/>}></Route>
        <Route path="/error" element={<Errado/>}></Route>
        <Route path="/correto" element={<Correto/>}></Route>
        <Route path="/error2" element={<Errado2/>}></Route>
        <Route path="/correto2" element={<Correto2/>}></Route>
        <Route path="/quiz2" element={<Quiz2/>}></Route>
        <Route path="/quiz3" element={<Quiz3/>}></Route>
        <Route path="/final" element={<Acabou/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
