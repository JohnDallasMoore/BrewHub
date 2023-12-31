import React, {useState, useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('id_token')

    navigate('/dashboard')
    window.location.reload()
  }

  useEffect(() => {
    const token = localStorage.getItem('id_token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const currentPage = useLocation().pathname
  return (
    
    <nav className="border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center ml-4">
            <img src="/BrewHubLogo.svg" className="h-8 mr-3" alt="BrewHub Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">BrewHub</span>
        </a>
        <div className="flex md:order-2">
            {isLoggedIn ? (
            <button onClick={handleLogout} className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Log Out</button>
            ) : (
            <Link to="/login" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Log In</Link>
            )}
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <Link to="/" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0 text-white dark:hover:text-white md:hover:bg-transparent border-gray-700">Home</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0 text-white dark:hover:text-white md:hover:bg-transparent border-gray-700">About</Link>
            </li>
            <li>
              <Link to="/finder" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0 text-white dark:hover:text-white md:hover:bg-transparent border-gray-700">Finder</Link>
            </li>
            <li>
              <Link to="/dashboard" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0 text-white dark:hover:text-white md:hover:bg-transparent border-gray-700">Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default NavBar