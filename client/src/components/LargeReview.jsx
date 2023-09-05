import React from 'react'
import Comments from './Comments'
import MakeComment from './MakeComment'

function LargeReview({ review }) {
  function commentButton(event) {
    event.preventDefault();

    if (event.target.parentElement.parentElement.children[6].classList.contains('hidden')) {
        event.target.parentElement.parentElement.children[6].classList.remove('hidden');
    }
    else {
        event.target.parentElement.parentElement.children[6].classList.add('hidden');
    };

  };

  return (
    <div>
      <main className="pt-4 pb-8 lg:pt-8 lg:pb-12">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
              <article className="border-4 rounded-lg p-8 border-gray-900 bg-gray-800 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                  <header className="mb-4 lg:mb-6 not-format">
                        <address className="flex items-center justify-between mb-6 not-italic">
                          <div className="flex flex-col mr-3 text-sm text-white">
                              <div>
                                  <a href="#" rel="author" className="text-xl font-bold text-white">Dallas Moore</a>
                                  <p className="text-base text-sm font-light text-gray-400">August 26, 2023</p>
                              </div>
                          </div>
                          <div>
                            <a href="#" className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-900 text-blue-400 mb-2">Review</a>
                          </div>
                        </address>
                      <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-2xl text-white"><a href="/posts/{{post.id}}">{review.title}</a></h1>
                  </header>
                  <p className="text-base font-light text-gray-400">{review.content}</p>
                  <br />
                  <figure><img className="mx-auto rounded-md object-contain h-96 w-96" src={`${review.image}`} alt="" />
                  </figure>
                  <br />
                  <div className="flex items-center">
                      <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <p className="ml-2 text-sm font-bold text-white">{review.rating}</p>
                      <span className="w-1 h-1 mx-1.5 rounded-full bg-gray-400"></span>
                      <a href="#" className="text-sm font-medium underline hover:no-underline text-white">{review.likes} Likes</a>
                      <span className="w-1 h-1 mx-1.5 rounded-full bg-gray-400"></span>
                      <button onClick={commentButton} id="comment-button" className="text-sm font-medium underline hover:no-underline text-white comment-buttons">Comments</button>
                  </div>
                  <div id="comment-input" className="hidden">
                      <MakeComment />
                      <Comments />
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

export default LargeReview