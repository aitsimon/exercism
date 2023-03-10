//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const EARTH_YEAR_MS_SECONDS = 31557600;
const ORBITAL_PERIODS = {
  mercury: 0.2408467,
  earth: 1.0,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};
export const age = (plantetName, numberSeconds) => {
  const orbitalPeriod = ORBITAL_PERIODS[plantetName];
  const planetOrbitalPeriodSeconds = orbitalPeriod * EARTH_YEAR_MS_SECONDS;
  const orbitalAge = numberSeconds / planetOrbitalPeriodSeconds;
  return Number(orbitalAge.toFixed(2));
};
