import React, { useState } from 'react'

export const Input = (props) => {

    const [focused, setFocused] = useState(false);
    const { label, errorMsg, onChange, id, ...inputProps } = props;

  return (
    <>
    <div className="formInput">
        <label>{label}</label>
        <input 
        {...inputProps} 
        onChange={onChange}
        onBlur={(e) => setFocused(true)}
        onFocus={() => inputProps.name === "cpass" && setFocused(true)}
        focused={focused.toString()}
        />
        <span>{errorMsg}</span>
    </div>
    </>
  )
}
