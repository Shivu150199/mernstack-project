import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import About from './pages/About'
import Profile from './pages/Profile'

export default function App() {
  return <BrowserRouter>
   
   <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/sign-in' element={<SignIn/>}/>
<Route path='/sign-up' element={<SignOut/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Profile' element={<Profile/>}/>
   </Routes>
   </BrowserRouter>
  
}
