import React from 'react'
import UserCard from '../../components/UserCard'
import { GET_USERS } from '../../utils/queries'
import { GET_USER_BY_ID } from '../../utils/queries'
import { useQuery } from '@apollo/client'

function AllUsers() {
  const { loading, data } = useQuery(GET_USERS)
  const users = data?.users || []
  return (
    <div>
      <section className="bg-gray-700">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Brew Crew</h2>
                <p className="font-light text-gray-400 sm:text-xl">Meet the BrewCrew: Explore user profiles, follow, and connect for a glimpse into diverse beer journeys and experiences.</p>
            </div> 
            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {loading ? (
                  <div>Loading...</div>
                ) : ( users.map((user) => (
                  <UserCard
                    user={user}
                    key={user._id}
                  />
                )))}
            </div> 
            <div>
              <a href="#" className="inline-flex items-center mt-12 text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                  See More
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div> 
        </div>
      </section>
    </div>
  )
}

export default AllUsers