import React from 'react';
import {Link} from "react-router-dom"
export default function Register(props)
{
    return(
    <div>

        <div>
          Username <input type="text" name="username" />
        </div>
        <div>
          Password <input type="text" name="password" />
        </div>
        <div>
        <Link to={`/`}><button type='submit' onClick={props.handleSubmit}>Register</button></Link>
        </div>

      <button onClick={() => props.history.goBack()}>Back</button>
    </div>
  )
}
