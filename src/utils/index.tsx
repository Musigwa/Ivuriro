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
