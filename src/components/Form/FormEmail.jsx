import React from 'react'

function FormEmail({name,handleChange}) {
  return (
    <div>
      <div className="my-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email address"
          name={name}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
}

export default FormEmail