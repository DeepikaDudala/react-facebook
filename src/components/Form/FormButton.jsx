import React from 'react'

function FormButton({className,text,style}) {
  return (
    <div>
      <center>
        <button className={className} style={style} type="submit">
          {text}
        </button>
      </center>
    </div>
  );
}

export default FormButton