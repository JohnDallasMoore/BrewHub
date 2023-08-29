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
        <div id="default-carousel" class="relative w-full" data-carousel="slide">
            {/* <!-- Carousel wrapper --> */}
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/Beer-Pour.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/Beer-Can.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/Beer-Pour.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/Beer-Can.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/Beer-Pour.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/Beer-Can.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
            </div>
            {/* <!-- Slider indicators --> */}
            <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>

      </div>
  )
}

export default Printables