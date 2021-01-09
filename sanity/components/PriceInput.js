import React from 'react';
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'

export const PriceInput = ({type, value, onChange, inputComponent}) => {
    function createPatchFrom(value){
        return PatchEvent.from(value === '' ? unset() : set(Number(value)))
    }
    return (
        <>
            <h2>{type.title} - {value}</h2>
            <p>{type.description}</p>
            <input type={type.name} value={value} ref={inputComponent} onChange={onChange(createPatchFrom(event.target.value))}/>
        </>
    )
}

PriceInput.focus = function() {
    this._inputElement.focus();
}
