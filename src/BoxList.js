import React, { useState } from 'react';
import './App.css';
import Box from './Box'
import {v4 as uuidv4} from "uuid";
import NewBoxForm from './NewBoxForm'

const BoxList = () => {

    const INITIAL_STATE= [
        {widthData: '100',
        heightData: '100',
        colorData: 'blue',
        id: uuidv4()
        },
        {widthData: '100',
        heightData: '100',
        colorData: 'red',
        id: uuidv4()}
    ]

    //Aug 19 left off - need to find out how to select the box to delete it, then implement the form
    const removeBox = (e) => {
        console.log(e.target.id);

        setBoxData(boxData.filter(box => box.id !== e.target.id))
    }

    const addBox = (newBoxData) => { setBoxData(boxData => [...boxData, {...newBoxData, id: uuidv4()}])}

    const [boxData, setBoxData] = useState(INITIAL_STATE);

  

    return(
        <div>
        {boxData.map(item => <Box widthData = {item.widthData} heightData = {item.heightData} colorData = {item.colorData} removeBox = {removeBox}
        id= {item.id}/>)}
        <NewBoxForm addBox = {addBox} />
        </div>

    )

}

export default BoxList;