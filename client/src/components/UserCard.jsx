import React from 'react'

function UserCard() {
  return (
    <div className='border-2 border-gray-900 rounded-md p-4 bg-gray-800'>
        <div class="text-center text-gray-400">
            <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="/dallas-pic.jpg" alt="Bonnie Avatar" />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-white">
                <a href="#">Dallas Moore</a>
            </h3>
            <p>Beer Enthusiast</p>
            <div class="flex justify-center mt-4 space-x-4">
                <a href="#about" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-900">
                    Follow
                </a>
                <a href="#projects" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                    Profile
                </a>
                
                
            </div>
        </div>
    </div>
)
}

export default UserCard