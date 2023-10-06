import React from 'react'

function FormInputText({handleChange,name,placeholder}) {
  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        required
      />
    </div>
  );
}

export default FormInputText