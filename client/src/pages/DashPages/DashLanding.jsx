import React from 'react'

function DashLanding() {
  return (
    <div>

      <section className="bg-gray-900 rounded-lg">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 md:p-12 mb-16">
                  <a href="#" className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-700 text-blue-400 mb-2">
                      <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                          <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
                      </svg>
                      Tutorial
                  </a>
                  <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-2">Brew Central Dashboard Overview</h1>
                  <p className="text-lg font-normal text-gray-400 mb-6">Explore the versatile Brew Central Dashboard, your command center for seamlessly managing brews, reviews, statuses, users, and achievements. Elevate your BrewHub experience with effortless navigation and intuitive interactions.</p>
                  <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-900">
                      Read more
                      <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 md:p-12">
                    <a href="#" className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-700 text-blue-400 mb-2">
                      <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                          <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
                      </svg>
                      Tutorial
                    </a>
                      <h2 className="text-white text-3xl font-extrabold mb-2">Navigating Brew Central</h2>
                      <p className="text-lg font-normal text-gray-400 mb-4">Learn how to efficiently navigate through the side panel to access All Posts, Reviews, Statuses, and All Users sections within the Brew Central Dashboard.</p>
                      <a href="#" className="text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                      </a>
                  </div>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 md:p-12">
                    <a href="#" className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-700 text-blue-400 mb-2">
                        <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                            <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
                        </svg>
                        Tutorial
                    </a>
                      <h2 className="text-white text-3xl font-extrabold mb-2">Using Your BrewHub Profile</h2>
                      <p className="text-lg font-normal text-gray-400 mb-4">Learn how to view and manage your BrewHub profile, make reviews, post statuses, and explore your earned achievements within the Brew Central Dashboard.</p>
                      <a href="#" className="text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </a>
                  </div>
              </div>
          </div>
      </section>

    </div>
  )
}

export default DashLanding