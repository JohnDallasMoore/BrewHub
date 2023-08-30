import React from 'react'

function Badge() {
  return (
    <div>
        <main className="pt-4 pb-8 lg:pt-8 lg:pb-12 max-w-lg">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
              <article className="border-4 rounded-lg p-8 border-gray-900 bg-gray-700 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                  <figure><img className="mx-auto rounded-full object-contain h-96 w-96" src="/badge.png" alt="" />
                  <br />
                  <h2 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-2xl text-white text-center">Brew Beginnings</h2>
                  <p className="text-base text-center font-light text-gray-400">So, you're new around here? Congrats on your first brew! This one's for you.</p>
                  </figure>
                  
              </article>
          </div>
      </main> 
    </div>
  )
}

export default Badge