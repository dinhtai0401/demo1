import React from 'react';
import { Link } from "react-router-dom";

export default function Code(props)
{

  return(
    <div>
    <h1>Here is your code: 4444</h1>
    <Link to='/verify'><button>Next</button></Link>
    <button onClick={() => props.history.goBack()}>Back</button>
    </div>
  )
}
