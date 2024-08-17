import React, {useState} from "react";
import styles from "./UnControlledOnOff.module.css";


export function UnControlledOnOff() {
    const [isOn, setIsOn] = useState(false);
    const onClick=()=>{
        setIsOn(true);
    }
    const offClick=()=>{
        setIsOn(false);
    }
    return (
        <div className={styles.container}>
            <div>
                <button onClick={onClick} className={isOn ? styles.onMode : ''}>on
                </button>

                <button onClick={offClick} className={isOn ? '' : styles.offMode}>of
                </button>
            </div>

            <div className={isOn ? styles.indicator + ' ' + styles.onMode : styles.indicator + ' ' + styles.indicator}></div>
        </div>
    );
}


