import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <Rating value={0}/>
            <Accordion titleValue={'accordion'} collapsed={false}/>
            <Accordion titleValue={'accordion'} collapsed={true}/>
        </div>
    );
}

export default App;
