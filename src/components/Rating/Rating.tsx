import React from "react";

type RatingPropsType = {
    value: 0|1|2|3|4|5
    ,
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star value={props.value} innerValue={1}/>
            <Star value={props.value} innerValue={2}/>
            <Star value={props.value} innerValue={3}/>
            <Star value={props.value} innerValue={4}/>
            <Star value={props.value} innerValue={5}/>
        </div>
    );
}

type StarPropsType = {
    innerValue:1|2|3|4|5
    value: number,
}

function Star(props: StarPropsType) {
    return (
        <div>
            {props.value>= props.innerValue ?
                <b>star</b> : <span>star</span>}
        </div>
    );
}