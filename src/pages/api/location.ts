import type { NextApiRequest, NextApiResponse } from 'next';

export type LocationData = {
  city: string | null;
  country: string | null;
  countryCode: string | null;
  id: number | null;
  latitude: number | null;
  longitude: number | null;
  name: string | null;
  population: number | null;
  region: string | null;
  regionCode: string | null;
  type: string | null;
  wikiDataId: string | null;
};

export type ErrorGeoResponse = {
  message: string;
};

export type SuccessfulGeoResponse = {
  data: LocationData[];
  metadata: {
    currentOffset: number;
    totalCount: number;
  };
};

export type Response = ErrorGeoResponse | SuccessfulGeoResponse;

const apiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.GEO_API_KEY || '',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  try {
    const { q: query } = req.query;
    // handle invalid queries
    if (!query || Array.isArray(query)) {
      throw new Error(
        `Could not fetch location data. The api call had an invalid search query: ${query}`
      );
    }
    // if query is valid, attempt to fetch from api
    const endpoint = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=10000&sort=population&limit=10&namePrefix=${query}`;
    const apiRes = await fetch(endpoint, apiOptions);
    const data = await apiRes.json();
    // handle api errors
    if (apiRes.status !== 200) {
      throw new Error(
        `There was an error retrieving the location data from GeoDB: error ${res.status}, ${data.message}`
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
