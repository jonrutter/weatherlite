const windDegrees: string[] = [
  'N',
  'NNE',
  'NE',
  'ENE',
  'E',
  'ESE',
  'SE',
  'SSE',
  'S',
  'SSW',
  'SW',
  'WSW',
  'W',
  'WNW',
  'NW',
  'NNW',
  'N',
];

export const windDirection = (deg: number): string => {
  const index = Math.round((deg % 360) / 22.5);
  return windDegrees[index];
};

export const pressureToInHg = (hpa: number): number =>
  Number((hpa * 0.029529983071445).toFixed(2));

export const mmToIn = (mm: number): number =>
  Number((mm * 0.0393701).toFixed(2));

export const metersToMi = (m: number): number =>
  Number((m * 0.000621371).toFixed(2));
