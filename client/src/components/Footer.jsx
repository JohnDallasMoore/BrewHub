import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <footer className="border-gray-200 bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center ml-4">
                    <img src="/BrewHubLogo.svg" className="h-8 mr-3" alt="BrewHub Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">BrewHub</span>
                </a>
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
        </footer>
    </div>
  )
}

export default Footer