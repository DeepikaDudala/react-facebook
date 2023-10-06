import React from 'react'

function FormInfo({text,title}) {
  return (
    <div>
      <div className="form-text ms-1">
        {text}{' '}
        <abbr title={title}>
          <i className="bi bi-question-circle-fill "></i>
        </abbr>
      </div>
    </div>
  );
}

export default FormInfo