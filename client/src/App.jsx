import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  return <BrowserRouter>
   <Header/>
   <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/sign-in' element={<SignIn/>}/>
<Route path='/sign-up' element={<SignOut/>}/>
<Route path='/About' element={<About/>}/>
<Route element={<PrivateRoute/>}>
<Route path='/Profile' element={<Profile/>}/>

</Route>

   </Routes>
   </BrowserRouter>
  
}
