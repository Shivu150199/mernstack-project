import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'

export default function OAuth({ text }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)
      const result = await signInWithPopup(auth, provider)
      console.log(result)
      const res = await fetch('api/auth/google', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      })
      const data = await res.json()
      dispatch(signInSuccess(data))
      console.log('alli')
      navigate('/')
    } catch (error) {
      console.log('could not connect with google', error)
    }
  }
  return (
    <div>
      <button
        type="button"
        className="bg-red-700 p-3 text-white rounded-lg w-full hover:opacity-90"
        onClick={handleGoogleClick}
      >
        {text}
      </button>
    </div>
  )
}
