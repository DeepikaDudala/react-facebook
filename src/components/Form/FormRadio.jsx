import React from 'react'

function FormRadio({className,htmlFor,labeltext,name,id,value,handleChange}) {
  return (
    <div className={className} htmlFor={htmlFor}>
      <label htmlFor={htmlFor}>{labeltext}</label>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormRadio