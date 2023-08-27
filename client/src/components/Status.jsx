import React from 'react'

function Status() {
  return (
    <div>
      <main className="pt-4 pb-8 lg:pt-8 lg:pb-12 bg-gray-700 max-w-lg">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
              <article className="border-4 rounded-lg p-8 border-gray-900 bg-gray-800 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                  <header className="mb-4 lg:mb-6 not-format">
                      <address className="flex items-center mb-6 not-italic">
                          <div className="inline-flex items-center mr-3 text-sm text-white">
                              <div>
                                  <a href="#" rel="author" className="text-xl font-bold text-white">Dallas Moore</a>
                                  <p className="text-base text-sm font-light text-gray-400">August 26, 2023</p>
                              </div>
                          </div>
                      </address>
                      
                  </header>
                  <figure><img className="mx-auto rounded-md object-contain h-96 w-96" src="/Dallas-Status.jpeg" alt="" />
                  <br />
                  <p className="text-base font-light text-gray-400">Western Sun IPA from Social Project is a hop lover's paradise. With its robust blend of citrusy and resinous flavors, this IPA shines brightly, leaving a lingering satisfaction on the palate.</p>
                  </figure>
                  <br />
                  <div className="flex items-center">
                      
                      <a href="#" className="text-sm font-medium underline hover:no-underline text-white">12 Likes</a>
                      <span className="w-1 h-1 mx-1.5 rounded-full bg-gray-400"></span>
                      <button id="comment-button" className="text-sm font-medium underline hover:no-underline text-white comment-buttons">Comments</button>
                  </div>
                  <div id="comment-input" className="hidden">
                      {/* <Comment /> */}
                  </div>
                  <p id="post-id" className="text-gray-800 text-opacity-0">
                      {/* post id for finding if needed */}
                  </p>
              </article>
          </div>
      </main> 
    </div>


  )
}

export default Status