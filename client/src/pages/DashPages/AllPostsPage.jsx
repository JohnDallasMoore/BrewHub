import React from 'react'
import LargeReview from '../../components/LargeReview'
import LargeStatus from '../../components/LargeStatus'

function AllPostsPage() {
  return (
    <div>
      <section className="border-4 border-gray-900 my-2 lg:my-4 lg:mx-12  rounded-xl bg-gray-800">
        <div className="flex flex-wrap justify-around ">
          <div className="rounded-md  mx-4 my-8">
            <h2 className="m-4 text-4xl text-center lg:text-6xl tracking-tight font-extrabold text-white">Brew Haven</h2>
            <p className="mb-6 lg:mx-72 font-light md:text-lg text-center text-gray-400">Welcome to the Brew Haven, a gathering of beer enthusiasts' posts and updates. Immerse yourself in flavorful reviews and captivating statuses, sharing the vibrant tapestry of the beer community's experiences.</p>
          </div>
        </div>
      </section>
      <section className="my-2 lg:my-4 lg:mx-12  rounded-xl bg-gray-700 flex justify-center">
          <div className="rounded-md mx-4 my-8 justify-center">
            <LargeStatus />
            <LargeReview />
            <LargeStatus />
            <LargeReview />
            <LargeStatus />
            <LargeReview />
          </div>
      </section>
    </div>
  )
}

export default AllPostsPage