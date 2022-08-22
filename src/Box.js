import React, { useState } from 'react';
import './App.css';
import BoxList from './BoxList'


const Box = ({widthData, heightData, colorData, removeBox, key, id}) => {


    const boxStyle = {width: `${widthData}px`, height: `${heightData}px`, backgroundColor: colorData}

    return(
        <div>
        <div data-testid ={colorData} style = {boxStyle}>

        </div>
        <button data-testid={`remove-${colorData}`} id= {id} onClick = {removeBox}>X</button>
        </div>
    )


}

export default Box;

