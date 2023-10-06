import React from 'react'

function FormDate({handleChange}) {
  return (
    <div>
      <div className="my-1 ">
        <input
          type="date"
          className="form-control"
          placeholder="Date"
          name="date"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default FormDate