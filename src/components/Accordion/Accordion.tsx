import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}
type TitlePropsType = {
    title: string
}


function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {props.collapsed && <AccordionBody/>}
        </div>
    );
}

function AccordionTitle(props: TitlePropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
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
