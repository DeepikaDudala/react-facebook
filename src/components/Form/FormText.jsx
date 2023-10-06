import React from 'react'

function FormText(props) {
  return (
    <div>
      <div className="form-text ms-1 mt-2">
        {props.text}
      </div>
    </div>
  );
}

export default FormText