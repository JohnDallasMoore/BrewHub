import React from 'react'

function Testimonials() {
  return (
    <div className="bg-gray-800">
        <hr className="w-4/5 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-600" />
        <div className="lg:flex lg:justify-around">
            <section className="bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                        <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                        </svg> 
                        <blockquote>
                            <p className="text-2xl font-medium text-white">"BrewHub is incredible. It's a treasure trove of pre-built components and pages, ranging from beer exploration to detailed reviews. An absolute must for any beer aficionado looking to elevate their experience!"</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-white">Michael Carter</div>
                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Beer Enthusiast</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section className="bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                        <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                        </svg> 
                        <blockquote>
                            <p className="text-2xl font-medium text-white">"BrewHub is a game-changer. Its comprehensive toolkit includes everything from brewery discovery to interactive reviews. The ideal solution for anyone seeking to enhance their beer journey!"</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-white">Emily Scott</div>
                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Beer Enthusiast</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Testimonials