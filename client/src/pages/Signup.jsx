import React from 'react'
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations'

import Auth from '../utils/auth'

function Signup() {
  const [formState, setFormState] = React.useState({ firstName: '', lastName: '', email: '', password: '' })
  const [addUser, { error }] = useMutation(ADD_USER)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    try {
      const mutationResponse = await addUser({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          password: formState.password,
        },
      })
      const token = mutationResponse.data.addUser.token
      Auth.login(token)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <section className="bg-gray-800 h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            
            <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-900 border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                        Sign Up
                    </h1>
                    <form className="signup-form space-y-4 md:space-y-6" onSubmit={handleFormSubmit}>
                        <div>
                            <label htmlFor="First-name" className="block mb-2 text-sm font-medium text-white">First Name</label>
                            <input value={formState.firstName} onChange={handleChange} type="text" name="firstName" id="first-name-signup" className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="John" required="" />
                        </div>
                        <div>
                            <label htmlFor="Last-name" className="block mb-2 text-sm font-medium text-white">Last name</label>
                            <input value={formState.lastName} onChange={handleChange} type="text" name="lastName" id="last-name-signup" className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Smith" required="" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                            <input value={formState.email} onChange={handleChange} type="email" name="email" id="email-signup" className="border  sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@brewhub.com" required="" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                            <input value={formState.password} onChange={handleChange} type="password" name="password" id="password-signup" placeholder="••••••••" className="border sm:text-sm rounded-lg f block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border rounded focus:ring-3  bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800" />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="remember" className="text-gray-300">Remember me</label>
                                </div>
                            </div>
                            
                        </div>
                        <button type="submit" className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Sign Up</button>
                        <p className="text-sm font-light text-gray-400">
                            Already have an account? <a href="/login" className="font-medium hover:underline text-blue-500">Login</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
};

export default Signup