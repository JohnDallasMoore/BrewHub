import React from 'react'

function Home() {
  return (
    <div>
      <section class="bg-center bg-cover h-screen bg-no-repeat bg-[url('/BeerLineup.jpg')] bg-gray-700 bg-blend-multiply">
          <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
              <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Welcome to BrewHub!</h1>
              <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Discover, rate, and connect with fellow beer enthusiasts. <br /> Cheers to the captivating world of beer! </p>
              <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                  <a href="/signup" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                      Sign Up
                      <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                  <a href="/about" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                      Learn more
                  </a>  
              </div>
          </div>
      </section>
    </div>
  )
}

export default Home