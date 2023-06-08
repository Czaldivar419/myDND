import { useState } from "react";

const SignUp= (props) => { 

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return ( 
    <div className="auth-form-container">
        <form className="signup-form" onSubmit={handleSubmit}>
            <div class="form-group">
                <label htmlfor="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            </div>
            <div class="form-group">
                <label htmlfor="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <div class="form-group">
                <label htmlfor="userName1">Username</label>
                <input type="username" class="form-control" id="exampleUsername" placeholder="Username"></input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account? Log in.</button>
        </div>
    
  )
};

export default SignUp;