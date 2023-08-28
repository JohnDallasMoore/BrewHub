import React from 'react'
import MakeStatus from '../../components/MakeStatus'

function MakeStatusPage() {
  return (
    <div className='h-screen'>
      <section className="my-2 lg:my-4 lg:mx-12  rounded-xl bg-gray-800">
        <div className="flex flex-wrap justify-around ">
          <div className="rounded-md  mx-4 my-8">
            <h2 className="m-4 text-4xl text-center lg:text-6xl tracking-tight font-extrabold text-white">Update Your Status</h2>
            <p className="mb-6 lg:mx-72 font-light md:text-lg text-center text-gray-400">Ready to share your status? Simply write your update in the provided section. You can also add a picture to enhance your post.</p>
          </div>
        </div>
      </section>
      <section className="my-2 lg:my-4 lg:mx-12  rounded-xl bg-gray-800">
        <MakeStatus />
      </section>
    </div>
  )
}

export default MakeStatusPage