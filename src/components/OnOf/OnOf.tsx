import React, {useState} from "react";
import styles from "./OnOf.module.css";

type OnOfPropsType = {
    isOn: boolean
    onChange: (isOn: boolean) => void
}

export function OnOf(props: OnOfPropsType) {
    return (
        <div className={styles.container}>
            <div>
                <button onClick={() => props.onChange(true)} className={props.isOn ? styles.onMode : ''}>on</button>
                <button onClick={() => props.onChange(false)} className={props.isOn ? '' : styles.offMode}>of</button>
            </div>

            <div
                className={props.isOn ? styles.indicator + ' ' + styles.onMode : styles.indicator + ' ' + styles.offMode}></div>
        </div>
    );
}

