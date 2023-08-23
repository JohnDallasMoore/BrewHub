import React from 'react'

function About() {
  return (
    <div>
      <section id="about" class="bg-gray-800 h-screen">
          <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div class="font-light text-gray-400 sm:text-lg">
                  <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">Discover the World of Beer.</h2>
                  <p class="mb-4">Welcome to BrewHub! Discover, capture, and share your unique beer experiences like never before. Our platform is designed for passionate beer enthusiasts who crave exploration and connection. Indulge in a vast collection of flavors, from classic lagers to hoppy IPAs and craft brew marvels. Engage with like-minded individuals, follow their beer journeys, and get inspired by their recommendations. Stay informed about the latest trends, events, and breweries, while expanding your knowledge of the brewing art. Embrace your passion for beer and let Brew Review be your trusted companion in your flavorful adventures.</p>
                  <p>Join us today and embark on an exciting journey of discovering, rating, and celebrating the world's finest brews together. Cheers to shared experiences and endless possibilities!</p>
              </div>
              <div class="hidden lg:ml-24 lg:grid lg:grid-cols-2 lg:gap-4 lg:mt-8">
                  <img class="object-cover w-full h-96 rounded-lg mx-8" src="/Beer-Pour.jpg" alt="Beer Pour" />
                  <img class="object-cover mt-4 h-96 aspect-auto w-full lg:mt-10 rounded-lg mx-8" src="/Beer-Can.jpg" alt="Beer Can" />
              </div>
          </div>
      </section>
    </div>
  )
}

export default About