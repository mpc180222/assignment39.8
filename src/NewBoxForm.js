import React, { useState } from 'react';
import './App.css';
import BoxList from './BoxList'


const NewBoxForm = ({addBox}) => {

    const INITIAL_STATE = {
        width: '',
        height: '',
        color: ''

    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = (e) => {
        e.preventDefault();
        // addBox(formData.width, formData.height, formData.color);
        addBox({widthData: formData.width, heightData: formData.height, colorData: formData.color});
        setFormData(INITIAL_STATE);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData, [name]: value

        }))

    }

    return(

        <form onSubmit = {handleSubmit}>
            <input data-testid="new-box-width-input" name = 'width' id = 'width' type = 'text' placeholder='width' value = {formData.width} onChange = {handleChange}></input>
            <input data-testid="new-box-height-input" name = 'height' id = 'height' type = 'text' placeholder='height' value = {formData.height} onChange = {handleChange}></input>
            <input data-testid="new-box-color-input" name = 'color' id = 'color' type = 'text' placeholder='color' value = {formData.color} onChange = {handleChange}></input>
            <button data-testid="new-box-submit-btn">Add box</button>
        </form>

    )




}

export default NewBoxForm;