import React, {useState} from "react";


export function UnControlledRating() {
    const [value, setValue] = useState<number>(0)

    return (
        <div>
            <Star selected={value > 0} onClick={()=>setValue(1)}/>
            <Star selected={value > 1} onClick={()=>setValue(2)}/>
            <Star selected={value > 2} onClick={()=>setValue(3)}/>
            <Star selected={value > 3} onClick={()=>setValue(4)}/>
            <Star selected={value > 4} onClick={()=>setValue(5)}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    onClick: ()=> void
}

function Star(props: StarPropsType) {
    return (
        <div onClick={props.onClick}>
            {props.selected ?
                <b>star</b> : <span>star</span>}
        </div>
    );
}