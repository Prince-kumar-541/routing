import Header from "./components/header";
import About from "./pages/About";
import Contect from "./pages/Contact";
import Home from "./pages/Home";
import './App.css';

import {Routes,Route} from "react-router-dom";
import NoteState from "./context/notes/NoteState";

function App() {


    return (
        <div>
            <NoteState>
            <Header/>

                <div id="center">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="contact" element={<Contect/>} />
                </Routes>
                </div>
            </NoteState>
            
        </div>
    );
}

export default App;