import React from 'react'
import { getNewId } from '../services/idService'

export default function Radio({
    radioClick = null,
    radioChecked = false,
    id = getNewId(),
    name = 'radio-button',
    description = 'descricao' }) {

    function handleRadio(){
        if(radioClick){
            radioClick()
        }
    }

    return (
        <div className='flex flex-row  mx-4 p-2 items-center space-x-2'>
            <input onChange={handleRadio} type="radio" name={name} id={id} checked={radioChecked} />
            <label htmlFor={id}>{description}</label>
        </div>
    )
}
