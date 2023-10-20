
import {Link} from 'react-router-dom'
const SignOut = () => {
  return (
    <div className="p-4 max-w-lg mx-auto">
     <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
<form className="flex flex-col gap-4">
  <input type="text" placeholder="Username" className="border rounded-lg p-3" id='username' />
  <input type="email" placeholder="email" className="border rounded-lg p-3" id='email' />
  <input type="password" placeholder="password" className="border rounded-lg p-3" id='password' />
  <button  className="bg-slate-700 text-white p-2 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Sign up</button>
</form>
<div className='flex gap-2 my-4'>
  <p>Have an account ?</p>
<Link to={'/sign-in'}>
  <span className='text-blue-700'>Sign In</span>
</Link>
</div>
    </div>
  )
}

export default SignOut
