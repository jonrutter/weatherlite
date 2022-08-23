import React, { useState } from 'react';

// types
import type { Location, LocationData, WeatherData } from '../types';

// localstorage
// import { readLocation, persistLocation } from './localStorage';

// api
import { fetchWeather } from './api';

// hero image
import HeroImage from '../images/rainbow.png';

// components
import { HomeLayout } from '../components/pages/home-page';
import { LoadingPage } from '../components/pages/loading-page';
import { WeatherPage } from '../components/pages/weather-page';
import { SearchInput } from '../components/search-input';
import { PrimaryButton } from '../components/buttons';

export const App = () => {
  // const [location, setLocation] = useState<Location | null>(readLocation());
  const [location, setLocation] = useState<Location | null>(null);
  const [loadingWeather, setLoadingWeather] = useState<boolean>(false);
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const handleLocationChange = (location: LocationData) => {
    const { name, latitude: lat, longitude: lon } = location;
    if (!name || !lat || !lon) {
      console.error('Cannot update location. The location data is incomplete.');
      return;
    }
    setLocation({ name, lat, lon });
    // persistLocation({ name, lat, lon });
  };

  const handleSubmitClick = () => {
    if (location) {
      setLoadingWeather(true);
      fetchWeather(location)
        .then((data) => setWeather(data))
        .catch((err) => console.warn(err))
        .finally(() => {
          setLoadingWeather(false);
        });
    } else {
      console.warn('Clicked fetch weather button without a location.');
    }
  };

  // useEffect(() => {
  //   if (location) {
  //     setLoadingWeather(true);
  //     fetchWeather(location)
  //       .then((data) => setWeather(data))
  //       .catch((err) => console.warn(err))
  //       .finally(() => setLoadingWeather(false));
  //   }
  // }, [location]);

  if (loadingWeather) return <LoadingPage />;

  if (weather && location)
    return <WeatherPage weather={weather} name={location.name} />;

  return (
    <HomeLayout>
      <div className="w-full max-w-sm sm:max-w-md mx-auto md:max-w-xl lg:max-w-full">
        <h1 className="text-2xl sm:text-3xl md:text-[2.5rem] md:leading-none font-black mb-5 md:mb-8 lg:mb-5">
          Open-source weather app with a focus on privacy
        </h1>
        <img
          src={HeroImage}
          alt="Illustration of a rainbow"
          className="max-w-lg w-full h-auto pointer-events-none select-none mx-auto lg:hidden mb-6 md:mb-8"
        />

        <p className="text-lg mb-6">
          Weatherlite is an open-source weather app that prioritizes your
          privacy. Search for your location below and find the weather forecast
          for your area.
        </p>
        <div className="max-w-full flex flex-col md:flex-row md:items-end justify-start">
          <SearchInput onChange={handleLocationChange} />
          <PrimaryButton
            onClick={handleSubmitClick}
            disabled={!location}
            className="mt-8 md:mt-0 md:ml-8"
          >
            Get weather
          </PrimaryButton>
        </div>
      </div>
      <div>
        <img
          src={HeroImage}
          alt="Illustration of a rainbow"
          className="hidden lg:block max-w-[600px] w-full h-auto pointer-events-none select-none mx-auto"
        />
      </div>
    </HomeLayout>
  );
};
