
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import OAuth from '../components/OAuth';
const SignOut = () => {
  const [formData,setFormData]=useState({})
const[error,setError]=useState(null);
const [loading,setLoading]=useState(false);
const navigate=useNavigate();

const handleSubmit=async (e)=>{
  e.preventDefault()
  try {
    setLoading(true)
   
  

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    const data = await res.json()
    // console.log(data)
    if(data.success===false){
      setLoading(false)
      setError(data.message)
      return;
      
    }
    setLoading(false)
    setError(null)
    navigate('/sign-in')
  } catch (error) {
    // console.log(error)
    setLoading(false)
    setError(error.message)
  }
}




const handleChange=(e)=>{
 setFormData({
  ...formData,
  [e.target.id]:e.target.value
 })

}
// console.log(formData)


  return (
    <div className="p-4 max-w-lg mx-auto">
     <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
  <input type="text" placeholder="Username" className="border rounded-lg p-3" id='username' onChange={handleChange} />
  <input type="email" placeholder="email" className="border rounded-lg p-3" id='email' onChange={handleChange} />
  <input type="password" placeholder="password" className="border rounded-lg p-3" id='password' onChange={handleChange} />
  <button disabled={loading} className="bg-slate-700 text-white p-2 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">{loading?"loading....":"sign up"}</button>
  <OAuth text='sign up with google'/>
</form>
<div className='flex gap-2 my-4'>
  <p>Have an account ?</p>
<Link to={'/sign-in'}>
  <span className='text-blue-700'>Sign In</span>
</Link>
</div>
{error&& <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}

export default SignOut
