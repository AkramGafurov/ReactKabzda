import React from 'react';

type AccordionPropsType = {
    accordionTitle: string
}
type TitlePropsType = {
    title: string
}


function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.accordionTitle}/>
            <AccordionBody/>
        </div>
    );
}

function AccordionTitle(props: TitlePropsType) {
    return (
        <div>
            <h3>Menu</h3>
        </div>
    );
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}


export default Accordion;
