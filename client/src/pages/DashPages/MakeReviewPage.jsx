import React from 'react'
import MakeReview from '../../components/MakeReview'

function MakeReviewPage() {
  return (
    <div>
      <section className="my-2 lg:my-4 lg:mx-12  rounded-xl bg-gray-800">
        <div className="flex flex-wrap justify-around ">
          <div className="rounded-md  mx-4 my-8">
            <h2 className="m-4 text-4xl text-center lg:text-6xl tracking-tight font-extrabold text-white">Post a Review</h2>
            <p className="mb-6 lg:mx-72 font-light md:text-lg text-center text-gray-400">Welcome to the review section! Share your thoughts on a beer by entering its name, leaving a review, and using the slider to rate it. For an extra touch, feel free to include a picture!</p>
          </div>
        </div>
      </section>
      <section className="my-2 lg:my-4 lg:mx-12  rounded-xl bg-gray-800">
        <MakeReview />
      </section>
    </div>
  )
}

export default MakeReviewPage