import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import { Button , Form , FormGroup , Label , Input} from 'reactstrap';
export default function Verify(props)
{
  return(
    <div>
    <button onClick={() => props.history.goBack()}>Back</button>
    <div>
    <form onSubmit={ props.verify }>
    <div>Enter your code</div>
    <input type="text" name="digit" maxlength="4"/>
    <button type="submit">Enter</button>
    </form>
    <Link to='/item'><button>Start charging</button></Link>
    </div>
    </div>
  )

}
