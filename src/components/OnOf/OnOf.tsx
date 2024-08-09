import React, {useState} from "react";
import styles from "./OnOf.module.css";

// type OnOfPropsType = {
//     isOn: boolean
// }

// export function OnOf(props: OnOfPropsType) {
//     return (
//         <div className={styles.container}>
//             <div>
//                 <button className={props.isOn ? styles.onMode : ''}>on</button>
//                 <button className={props.isOn ? '' : styles.ofMode}>of</button>
//             </div>
//
//             <div className={props.isOn ?styles.indicator + ' '+ styles.onMode : styles.indicator + ' '+ styles.indicator}></div>
//         </div>
//     );
// }
export function OnOf() {
    const [isOn, setIsOn] = useState(false);
    return (
        <div className={styles.container}>
            <div>
                <button onClick={()=>setIsOn(true)} className={isOn ? styles.onMode : ''}>on</button>
                <button onClick={()=>setIsOn(false)} className={isOn ? '' : styles.offMode}>of</button>
            </div>

            <div className={isOn ?styles.indicator + ' '+ styles.onMode : styles.indicator + ' '+ styles.offMode}></div>
        </div>
    );
}

