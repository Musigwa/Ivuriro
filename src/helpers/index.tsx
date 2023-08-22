export const genRandomCoords = () => {
  const minLat = -90; // Minimum latitude
  const maxLat = 90; // Maximum latitude
  const minLng = -180; // Minimum longitude
  const maxLng = 180; // Maximum longitude

  const randomLat = Math.random() * (maxLat - minLat) + minLat;
  const randomLng = Math.random() * (maxLng - minLng) + minLng;

  return { latitude: +randomLat.toFixed(6), longitude: +randomLng.toFixed(6) };
};
