import React from 'react'

function Printables() {
  return (    
      <div>
        <section className="border-4 border-gray-900 my-2 lg:my-4 lg:mx-12  rounded-xl bg-gray-800">
            <div className="flex flex-wrap justify-around ">
            <div className="rounded-md  mx-4 my-8">
                <h2 className="m-4 text-4xl text-center lg:text-6xl tracking-tight font-extrabold text-white">Brew Quests</h2>
                <p className="mb-6 lg:mx-72 font-light md:text-lg text-center text-gray-400">Unlock a world of entertainment with our Printables collection. Access a diverse range of beer games, challenges, and activities to elevate your gatherings. Elevate your beer experiences with interactive fun!</p>
            </div>
            </div>
        </section>
        <div class="grid grid-cols-2 gap-2 my-2 lg:my-4 lg:mx-12  rounded-xl ">
            <div>
                <a href="/printable-1.pdf" download>
                    <img class="h-auto max-w-full rounded-lg" src="/printable-1.jpg" alt="" />
                </a>
            </div>
            <div>
                <a href="/printable-2.pdf" download>
                    <img class="h-auto max-w-full rounded-lg" src="/printable-2.jpg" alt="" />
                </a>
            </div>
            <div>
                <a href="/printable-3.pdf" download>
                    <img class="h-auto max-w-full rounded-lg" src="/printable-3.jpg" alt="" />
                </a>
            </div>
            <div>
                <a href="/printable-4.pdf" download>
                    <img class="h-auto max-w-full rounded-lg" src="/printable-4.jpg" alt="" />
                </a>
            </div>
            <div>
                <a href="/printable-5.pdf" download>
                    <img class="h-auto max-w-full rounded-lg" src="/printable-5.jpg" alt="" />
                </a>
            </div>
            <div>
                <a href="/printable-6.pdf" download>
                    <img class="h-auto max-w-full rounded-lg" src="/printable-6.jpg" alt="" />
                </a>
            </div>
        </div>

      </div>
  )
}

export default Printables