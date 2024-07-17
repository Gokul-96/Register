import React from 'react'

const Profile = () => {
  return (
    <div><h1>Profile</h1>
    <form onSubmit={onSubmit}>
          <input type ="text" name="name" value={name} readOnly placeholder="Name"/>
          <input type ="email" name="email" value={email} readOnly placeholder="Email"/>
          <input type="number" name="age" value={age} onChange={onChange} placeholder="Age" />
        <input type="text" name="gender" value={gender} onChange={onChange} placeholder="Gender" />
        <input type="date" name="dob" value={dob} onChange={onChange} placeholder="Date of Birth" />
        <input type="text" name="mobile" value={mobile} onChange={onChange} placeholder="Mobile" />
        <button type="submit">Update Profile</button>
</form>
<button onClick={onLogout}>Logout</button>
    
    
    
    </div>
  )
}

export default Profile