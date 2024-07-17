import React,{ useState } from 'react'




const SignUp = () => {
  const [Data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const onChange = e => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      const newUser = { name, email, password };}
  }

const { name, email, password, confirmPassword} = Data;





  return (
    
    <div><h1>Signup</h1>
    <form onSubmit={onSubmit}>
          <input type ="text" name="name" value={name} onChange={onChange} placeholder="Name" />
          <input type ="email" name="email" value={email} onChange={onChange} placeholder="Email" />
          <input type ="password" name="password" value={password} onChange={onChange} placeholder="Password" />
          <input type ="password" name="confirmPassword" value={confirmPassword} onChange={onChange} placeholder="ConfirmPassword" />
          <button type="submit">SignUp</button>

</form>
    
    
    
    </div>
  )
}

export default SignUp;
