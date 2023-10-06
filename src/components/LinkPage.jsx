import React from 'react'
import {Link} from "react-router-dom"

function LinkPage({to,text}) {
  return (
    <center>
      <Link to={to}>{text}</Link>
    </center>
  );
}

export default LinkPage