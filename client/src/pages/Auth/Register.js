import React, {useState} from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import "../../styles/AuthStyles.css"
const Register = ()=> {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [phone,setPhone] = useState("")
  const [address,setAddress] = useState("")
  const navigate= useNavigate();

 //form function
 const handleSubmit = async(e) => {
  e.preventDefault()
  try {
    const res = await axios.post
    ("/api/v1/auth/register",
    {name,email,password,phone,address});

    if(res && res.data.success){
      toast.success(res.data.message);
      navigate('/login');
    }
    else{
      toast.error(res.data.message)
    }

  } catch (error) {
    console.log(error);
    toast.error('Something went wrong')
  }
 };

  return (
    <Layout title={"Register here"}>
      <div className= "form-container">

<form onSubmit={handleSubmit}>
  <h4 className='title'>Register Form</h4>
  <div className="mb-3">
    {/* <label htmlFor="exampleInputName" className="form-label">Name</label> */}
    <input type="text"
      value={name}
      onChange={(e)=>setName(e.target.value)}
       className="form-control" id="exampleInputEmail1" 
    placeholder='Enter Your Name'
    required
    />
   </div>

   <div className="mb-3">
    {/* <label htmlFor="exampleInputName"  className="form-label">Email</label> */}
    <input type="email" className="form-control" id="exampleInputEmail1"
    
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    placeholder='Enter Your Email'
    required
     />
    
   </div>

  <div className="mb-3">
    {/* <label htmlFor="exampleInputPassword1" className="form-label">Password</label> */}
    <input type="password" 
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    className="form-control" id="exampleInputPassword1" 
    placeholder='Enter Your Password'
    required
    />
  </div>

  <div className="mb-3">
    {/* <label htmlFor="exampleInputName" className="form-label">Phone</label> */}
    <input type="text" 
    value={phone}
    onChange={(e)=>setPhone(e.target.value)}
    className="form-control" id="exampleInputEmail1" 
    placeholder='Enter Your Phone'
    required
    />
   </div>

   <div className="mb-3">
    {/* <label htmlFor="exampleInputName" className="form-label">Address</label> */}
    <input 
    value={address}
    onChange={(e)=>setAddress(e.target.value)}
    type="text" className="form-control" id="exampleInputEmail1" 
    placeholder='Enter Your Address'
    required
    />
   </div>

  <button type="submit" className="btn btn-primary">Submit</button>

</form>

      </div>
      </Layout>
  )
}

export default Register