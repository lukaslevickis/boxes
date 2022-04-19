import React from "react";

export default function Box(props) {

    const styles = {
        backgroundColor: props.on ? "black" : "white"
    }

    return (
        <div  
            style={styles} on={props.on} 
            className='box' 
            key={props.id} 
            onClick={toggle} //function that runs function - ()=>props.toggle(props.id)
            ></div>
    )
} 