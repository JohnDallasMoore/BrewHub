import React from "react";
import Review from "../../components/Review";
import Status from "../../components/Status";

function Profile() {
  return (
    <div>
      <section className="my-2 lg:my-4 lg:mx-12  rounded-lg bg-gray-800">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
              <img className="w-full rounded-full" src="/dallas-pic.jpg" alt="dashboard image" />
              <div className="mt-4 md:mt-0">
                  <h2 className="mb-4 text-4xl text-center lg:text-8xl tracking-tight font-extrabold text-white">Dallas Moore</h2>
                  <p className="mb-6 font-light md:text-lg text-center text-gray-400">Sipping through life, one brew at a time 🍻 Beer enthusiast on a journey of flavors and stories. Join me in celebrating the art of brewing and the joy of discovering new beers!</p>
                  <div className="flex flex-col items-center">
                    <a href="#" className="inline-flex items-center  text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                        Follow
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>

                  </div>
                  <div className="w-full lg:w-full px-4 lg:order-1">
                    <div className="flex flex-wrap justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span className="text-sm text-blueGray-400">Followers</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span className="text-sm text-blueGray-400">Following</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">12</span><span className="text-sm text-blueGray-400">Reviews</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">18</span><span className="text-sm text-blueGray-400">Statuses</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span className="text-sm text-blueGray-400">Achievements</span>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="lg:my-4 lg:mx-12  rounded-xl bg-gray-900 flex flex-wrap justify-around">
          <div className="my-8">
            <h2 className="m-4 text-4xl text-center lg:text-6xl tracking-tight font-extrabold text-white">Your Reviews</h2>
            <Review />
            <Review />
            <Review />
          </div>
          <hr />
          <div className="my-8">
            <h2 className="m-4 text-4xl text-center lg:text-6xl tracking-tight font-extrabold text-white">Your Statuses</h2>
            <Status />
            <Status />
            <Status />
          </div>
      </section>
      
    </div>
  );
}

export default Profile;
