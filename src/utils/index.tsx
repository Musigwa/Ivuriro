type CoordsType = { longitude: number; latitude: number };

export const geoDistanceCalc = (a: CoordsType, b: CoordsType) => {
  const earthRadius = 6371; // Earth's radius in kilometers

  const latitudeDifference = (b.latitude - a.latitude) * (Math.PI / 180);
  const longitudeDifference = (b.longitude - a.longitude) * (Math.PI / 180);

  const havLatDiff = Math.sin(latitudeDifference / 2) * Math.sin(latitudeDifference / 2);
  const havLonDiff = Math.sin(longitudeDifference / 2) * Math.sin(longitudeDifference / 2);

  const centralAngle =
    2 *
    Math.atan2(
      Math.sqrt(
        havLatDiff +
          Math.cos(a.latitude * (Math.PI / 180)) *
            Math.cos(b.latitude * (Math.PI / 180)) *
            havLonDiff
      ),
      Math.sqrt(1 - havLatDiff)
    );

  return +(earthRadius * centralAngle).toFixed(1); // Distance in kilometers
};

export const ellipsizeText = (text: string = '', n: number) =>
  text.length > n ? text.slice(0, n - 1) + '\u2026' : text;

export const formatTimestamp = (text: string, type: 'elapsed' | '') => {
  switch (type) {
    case 'elapsed':
      return text
        .replace(/year/g, 'yr')
        .replace(/hour/g, 'hr')
        .replace(/minute/g, 'min')
        .replace(/second/g, 'sec');
  }
};
