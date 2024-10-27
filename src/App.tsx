import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/unControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UncontrolledRating/UnControlledRating";
// import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";

function App() {
    const[accordionCollapsed, setAccordionCollapsed] = useState(false)
    const[isOn, setIsOn] = useState(true)
    const[ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className="App">
            <h2>Accordion</h2>
            <Accordion titleValue={'accordion'} collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
            <UnControlledAccordion titleValue={'uncontrolled'}/>
            <h2>OnOff</h2>
            {/*<UnControlledOnOff isOn={true}/>*/}
            {/*<UnControlledOnOff isOn={false}/>*/}
            <OnOff isOn={isOn} onChange={setIsOn}/>
            {/*<UnControlledOnOff/>*/}

            <h2>Rating</h2>
            <h3>Rating</h3>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <h3>UnControlledRating</h3>
            <UnControlledRating/>
        </div>
    );
}

export default App;
