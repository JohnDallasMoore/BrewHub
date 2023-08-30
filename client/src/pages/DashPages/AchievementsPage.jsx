import React from 'react'
import Badges from '../../components/Badges'

function AchievementsPage() {
  return (
    <div>
      <section className="my-2 lg:my-4 lg:mx-12  rounded-xl bg-gray-800">
        <div className="flex flex-wrap justify-around ">
          <div className="rounded-md  mx-4 my-8">
            <h2 className="m-4 text-4xl text-center lg:text-6xl tracking-tight font-extrabold text-white">Your Achievement Badges</h2>
          </div>
        </div>
      </section>

      <section className="lg:my-4 lg:mx-12  rounded-xl bg-gray-900">
        <div className="flex flex-wrap justify-around ">
          <Badges />
          <Badges />
          <Badges />
          <Badges />

        </div>

        <div className='flex justify-center'>
          <a href="#" className="my-8 inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-900">
              See all badges
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </a>
        </div>
      </section>
    </div>
  )
}

export default AchievementsPage