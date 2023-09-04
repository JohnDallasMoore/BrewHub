import React from 'react'
import LargeStatus from '../../components/LargeStatus'
import { GET_STATUSES } from '../../utils/queries'
import { useQuery } from '@apollo/client'

function StatusPage() {
  const { loading, data } = useQuery(GET_STATUSES)
  const statuses = data?.statuses || []
  return (
    <div>
      <section className="border-4 border-gray-900 my-2 lg:my-4 lg:mx-12  rounded-xl bg-gray-800">
        <div className="flex flex-wrap justify-around ">
          <div className="rounded-md  mx-4 my-8">
            <h2 className="m-4 text-4xl text-center lg:text-6xl tracking-tight font-extrabold text-white">Brewer's Journal</h2>
            <p className="mb-6 lg:mx-72 font-light md:text-lg text-center text-gray-400">Step into the Brewer's Journal – an exclusive space for beer enthusiasts' status updates. Experience a tapestry of moments, moods, and experiences shared by fellow beer enthusiasts on their journeys.</p>
          </div>
        </div>
      </section>
      <section className="my-2 lg:my-4 lg:mx-12  rounded-xl bg-gray-700 flex justify-center">
          <div className="rounded-md mx-4 my-8 justify-center">
            {loading ? (
            <div>Loading...</div>
          ) : ( statuses.map((status) => (
            <LargeStatus
              status={status}
              key={status._id}
            />
          )))}
          </div>
      </section>
    </div>
  )
}

export default StatusPage