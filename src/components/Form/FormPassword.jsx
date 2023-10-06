import React from 'react'

function FormPassword({name,handleChange}) {
  return (
    <div>
      <div className="my-3 ">
        <input
          type="password"
          className="form-control"
          placeholder="New password"
          name={name}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default FormPassword