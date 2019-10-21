import React from 'react';
import {Link} from "react-router-dom";
import { Button , Form , FormGroup , Label , Input} from 'reactstrap';
export default function Verify(props)
{
    return(
    <Form className="Login" >
      <h1>
        <span className="font-weight-bold">CODE</span>
      </h1>


      <Input type="text" name="password" onChange={props.handlePasswordChange}/>
      <Button className="btn-lg btn-dark btn-block">Enter</Button>
      <Button onClick={() => props.history.goBack()}>Back</Button>
    </Form>
    /*<div>

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
    </div>*/
  )
}
