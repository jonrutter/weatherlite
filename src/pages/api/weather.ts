import type { NextApiRequest, NextApiResponse } from 'next';
import type { WeatherResponse } from '@/types';

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherResponse>
) {
  try {
    const { lat, lon } = req.query;
    // handle cases where lat or lon are improperly formatted
    if (typeof lat !== 'string' || typeof lon !== 'string' || !lat || !lon) {
      throw new Error(
        'Unable to fetch weather. One or more of the api request queries were invalid.'
      );
    }
    // if lat/lon are formatted correctly, attempt to fetch the weather for those coordinates
    const endpoint = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial&exclude=minutely`;
    const apiRes = await fetch(endpoint);
    const data = await apiRes.json();

    // handle errors from api
    if (apiRes.status !== 200) {
      throw new Error(
        `There was an error fetching the weather data from OpenWeatherMap: error ${apiRes.status}, ${data?.message}`
      );
    } else if (data?.cod && data.cod >= 400) {
      /* When OpenWeatherMap encounters a problem, it 
      (annoyingly) sometimes still sends an HTTP 200 
      response (but with a response body indicating that 
      there was an error). So we need to make sure that the 
      response is not one of these errors. 
      https://openweathermap.org/faq#error401 */
      throw new Error(
        `There was an error retrieving the weather data from Openweathermap: error code ${data?.cod}, ${data?.message}`
      );
    }
    // if no errors, return the data
    res.status(200).send({ ...data });
  } catch (err) {
    let message = 'Unknown Error';
    // handle TS typing errors as unknown
    if (err instanceof Error) message = err.message;
    res.status(400).send({ message });
  }
}
