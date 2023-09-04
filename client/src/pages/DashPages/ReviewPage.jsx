import React from 'react'
import LargeReview from '../../components/LargeReview'
import { GET_REVIEWS } from '../../utils/queries'
import { useQuery } from '@apollo/client'

function ReviewPage() {
  const { loading, data } = useQuery(GET_REVIEWS)
  const reviews = data?.reviews || []
  
  return (
    <div>
      <section className="border-4 border-gray-900 my-2 lg:my-4 lg:mx-12  rounded-xl bg-gray-800">
        <div className="flex flex-wrap justify-around ">
          <div className="rounded-md  mx-4 my-8">
            <h2 className="m-4 text-4xl text-center lg:text-6xl tracking-tight font-extrabold text-white">Tasting Room</h2>
            <p className="mb-6 lg:mx-72 font-light md:text-lg text-center text-gray-400">Dive into the Brewer's Tasting Room – a curated collection of beer enthusiasts' reviews. Discover diverse perspectives, detailed insights, and flavorful journeys shared by fellow beer aficionados.</p>
          </div>
        </div>
      </section>
      <section className="my-2 lg:my-4 lg:mx-12  rounded-xl bg-gray-700 flex justify-center">
          <div className="rounded-md mx-4 my-8 justify-center">
            {loading ? (
            <div>Loading...</div>
          ) : ( data.reviews.map((review) => (
            <LargeReview 
              review={review}
              key={review._id}
            />
          )))}
          </div>
      </section>
    </div>
  )
}

export default ReviewPage