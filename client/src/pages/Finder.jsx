import React from 'react'

function Finder() {
  return (
    <div>
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "50%",
          backgroundImage: "url('/BrewHubHero.jpg')",
          height: "500px"
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.218)"
          }}
        >
          <div className="flex justify-center items-start h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mt-20 mb-12">
                Cheers to finding your new favorite brewery.
              </h1>
            </div>
          </div>
        </div>
      </div>
      

      <div className="bg-gray-800 py-16">
        <h2 className="text-3xl md:text-3xl xl:text-4xl font-bold tracking-tight px-auto text-white text-center ">
          Find Local Brews
        </h2>
        <form className="bg-gray-800" >
          <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only text-white">Search</label>
          <div className="relative mx-auto my-20 w-4/5 md:w-3/5 lg:w-3/5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                />
                  
              
      
            </div>
            <input type="search" id="default-search"
              className="block w-full p-4 pl-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Kansas City" required />
            <button
            type="submit" id="search-button"
              className="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
              Search
            </button>
          </div>
        </form>
      </div>
  
    </div>
  )
}

export default Finder