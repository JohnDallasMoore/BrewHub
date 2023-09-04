
import React, { useState, useEffect } from 'react';

const Finder = () => {

  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const [userLatitude, setUserLatitude] = useState(localStorage.getItem('USER_LAT') || '');
  const [userLongitude, setUserLongitude] = useState(localStorage.getItem('USER_LONG') || '');
  const [defaultSearch, setDefaultSearch] = useState('');
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  const successCallback = (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    setUserLatitude(lat);
    setUserLongitude(long);
    localStorage.setItem('USER_LAT', lat);
    localStorage.setItem('USER_LONG', long);
  };

  const errorCallback = (error) => {
    console.log(error);
  };



  const processSearch = (searchQuery) => {
    searchByCity(searchQuery);
    makeCityGoogleMap(searchQuery);
    searchByCity(searchQuery); // Called twice for a potential bug fix
  };

  const searchByCity = (cityString) => {
    const byCityURL = `https://api.openbrewerydb.org/v1/breweries?by_city=${cityString}&per_page=30`;

    fetch(byCityURL)
      .then((response) => response.json())
      .then((data) => {
        const breweriesData = data.slice(0, 5); // Limit to the first 5 breweries

        const breweryCards = breweriesData.map((brewery, index) => (
          <div key={index} className="max-w-xs p-2 m-2 bg-white border-4 border text-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-200">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{brewery.name}</h5>
            {/* ... Render other card details here */}
          </div>
        ));

        setBreweries(breweryCards);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const makeCityGoogleMap = (searchQuery) => {
    const googleMapSrc = `https://www.google.com/maps/embed/v1/search?key=AIzaSyCB3lXQUe3SeV0zKPvqYYzjp89i2YaNETA&q=breweries in ${searchQuery}`;
    const iframe = document.createElement('iframe');
    iframe.setAttribute('width', '80%');
    iframe.setAttribute('height', '80%');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('border-radius', '20px');
    iframe.setAttribute('style', 'border:0');
    iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    iframe.setAttribute('src', googleMapSrc);
    const mapView = document.querySelector('#map-view');
    mapView.innerHTML = '';
    mapView.appendChild(iframe);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    processSearch(defaultSearch);
    setSearchButtonClicked(true);
  }

  return (
    <div className='bg-gray-800'>
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "50%",
          backgroundImage: "url('/BrewHubHero.jpg')",
          height: "500px"
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.218)"
          }}
        >
          <div className="flex justify-center items-start h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mt-20 mb-12">
                Cheers to finding your new favorite brewery.
              </h1>
            </div>
          </div>
        </div>
      </div>
      

      <div className="bg-gray-800 py-16">
        <h2 className="text-3xl md:text-3xl xl:text-4xl font-bold tracking-tight px-auto text-white text-center ">
          Find Local Brews
        </h2>
        
        <form onSubmit={handleSearchSubmit}>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only text-white">Search</label>
        <div className="relative mx-auto my-20 w-4/5 md:w-3/5 lg:w-3/5">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Kansas City"
            value={defaultSearch}
            onChange={(e) => setDefaultSearch(e.target.value)}
            required
          />
          <button
            type="submit"
            id="search-button"
            className="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      </div>
          <div className='bg-gray-800'>
            {searchButtonClicked && (
            <div className="m-8 map-cont bg-gray-800">
              <div className="container mx-auto px-4 bg-gray-800">
                <h2 className=" bg-gray-800 text-3xl md:text-3xl xl:text-4xl font-bold tracking-tight text-center text-white">Map View</h2>
              </div>
            </div>
            )}
            <div id="map-view" className="md:h-screen flex justify-center lg:h-screen bg-gray-800">
            
            </div>
          </div>
    </div>
  );
};

export default Finder