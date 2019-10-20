import React from 'react';
import {Link} from "react-router-dom"
export default function Register(props)
{
    return(
    <div>

      <form onSubmit={ props.handleSubmit }>
        <div>
          Username <input type="text" name="username" />
      </div>
      <div>
          Password <input type="text" name="password" />
        </div>
      <div>
          <button type="submit">Register</button>
      </div>
      </form>


<button onClick={() => props.history.goBack()}>Back</button>
    </div>
  )
}
