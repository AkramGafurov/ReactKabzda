import React from "react";

export type RatingValueType = 0|1|2|3|4|5

export type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType)=>void
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value>0} onClick={props.onClick} innerValue ={1}/>
            <Star selected={props.value>1}  onClick={props.onClick} innerValue ={2}/>
            <Star selected={props.value>2} onClick={props.onClick} innerValue ={3}/>
            <Star selected={props.value>3} onClick={props.onClick} innerValue ={4}/>
            <Star selected={props.value>4} onClick={props.onClick} innerValue ={5}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    onClick: (value: 0|1|2|3|4|5)=>void
    innerValue:  0|1|2|3|4|5
}

function Star(props: StarPropsType) {
    return (
        <div>
            {props.selected?
                <b>star</b> : <span onClick={()=>{props.onClick(props.innerValue)}}>star</span>}
        </div>
    );
}