import addDays from 'date-fns/addDays';
import addHours from 'date-fns/addHours';
import subHours from 'date-fns/subHours';
import startOfDay from 'date-fns/startOfDay';
import startOfHour from 'date-fns/startOfHour';
import endOfDay from 'date-fns/endOfDay';

export const getNextHour = (currentDate: Date) => {
  let hours = 0;
  return () => {
    hours++;
    return Math.floor(
      startOfHour(addHours(currentDate, hours)).getTime() / 1000
    );
  };
};

export const getNextDate = (currentDate: Date) => {
  let days = -1; // OpenWeather's daily forecast starts with the current day, so we need to start by adding 0 days to the current day
  return () => {
    days++;
    return Math.floor(startOfDay(addDays(currentDate, days)).getTime() / 1000);
  };
};

export const getSunrise = (currentDate: Date) =>
  Math.floor(addHours(startOfDay(currentDate), 6).getTime() / 1000);

export const getSunset = (currentDate: Date) =>
  Math.floor(subHours(endOfDay(currentDate), 5).getTime() / 1000);
