import React from 'react';
import {Link} from "react-router-dom";
import { Button , Form , FormGroup , Label , Input} from 'reactstrap';
export default function Register(props)
{
    return(
      <Form className="Login" onSubmit={props.handleSubmit}>
      <h1>
        <span className="font-weight-bold">Register</span>
      </h1>
      <FormGroup>
        <Label>Username</Label>
        <Input type="text" placeholder="Username" name="username"/>
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="text" name="password" placeholder="Password"/>
      </FormGroup>
      <Button className="btn-lg btn-dark btn-block">Sign up</Button>
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
