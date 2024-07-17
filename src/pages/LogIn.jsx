import React from 'react'

const Login = () => {
  const [Data, setData] = useState({
    email: '',
    password: '',
  });

  const {email, password } = Data;

  const onChange = e => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    const user = { email, password };}







  return (
    <div><h1>Login</h1>
    <form onSubmit={onSubmit}>
         
          <input type ="email" name="email" value={email} onChange={onChange}/>
          <input type ="password" name="password" value={password} onChange={onChange}/>
          
          <button type="submit">Login</button>

</form>
    
    
    
    </div>
  
  )
}

export default Login;