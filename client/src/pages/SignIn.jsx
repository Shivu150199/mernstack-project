import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'
import { signInSuccess, signInFailure, signInStart } from '../redux/user/userSlice'
const SignIn = () => {
  const [formData, setFormData] = useState({})
 const {loading,error}=useSelector((state)=>state.user)
  const navigate = useNavigate()
  const dispatch=useDispatch();
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(signInStart());

      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      // console.log(data)
      if (data.success === false) {
       dispatch(signInFailure(data.message))
        return
      }
     dispatch(signInSuccess(data))
      navigate('/')
    } catch (error) {
     dispatch(signInFailure(error.message))
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }
  // console.log(formData)

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
       
        <input
          type="email"
          placeholder="email"
          className="border rounded-lg p-3"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border rounded-lg p-3"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-2 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? 'loading....' : 'sign in'}
        </button>
      </form>
      <div className="flex gap-2 my-4">
        <p>Do not have an account ?</p>
        <Link to={'/sign-up'}>
          <span className="text-blue-700">Register</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  )
}

export default SignIn
