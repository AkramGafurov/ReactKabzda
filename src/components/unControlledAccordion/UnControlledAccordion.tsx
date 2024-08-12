import React from 'react';

type UnControlledAccordionPropsType = {
    titleValue: string
}
type TitlePropsType = {
    title: string
    onClick: ()=>void
}


function UnControlledAccordion(props: UnControlledAccordionPropsType) {
const [collapsed, setCollapsed] = React.useState<boolean>(false)
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
            {collapsed && <AccordionBody/>}
        </div>
    );
}

function AccordionTitle(props: TitlePropsType) {
    return (
        <div>
            <h3 onClick={props.onClick}>{props.title}</h3>
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


export default UnControlledAccordion;
