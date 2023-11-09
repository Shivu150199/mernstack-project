import {FaSearch} from 'react-icons/fa';
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';
const Header = () => {
  const {currentUser}=useSelector(state=>state.user)
  console.log(currentUser)
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between item-center max-w-6xl mx-auto p-3">
        <Link to="/" className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500 drop-shadow-2xl">Shree</span>
          <span className="text-slate-700 drop-shadow-md">Estate</span>
        </Link>
        <form className="bg-slate-100 rounded-md p-1d flex items-center">
          <input
            type="text"
            placeholder="search...."
            className="p-1 rounded-md outline-none bg-transparent w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4">
          <Link
            to="/"
            className="hidden sm:inline text-slate-700 hover:underline cursor-pointer"
          >
            Home
          </Link>

          <Link
            to="about"
            className="hidden sm:inline text-slate-700 hover:underline cursor-pointer"
          >
            About
          </Link>
          <Link to="/profile" className='flex items-center'>
            {currentUser ? (
              <img src={currentUser.avatar} alt="" className='w-6 h-6 rounded' />
            ) : (
              <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
                sign in
              </li>
            )}
           
          </Link>
        </ul>
      </div>
    </header>
  )
}

export default Header
