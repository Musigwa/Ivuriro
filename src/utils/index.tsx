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

export const formatTimestamp = (lastMessageTimestamp: string): string | null => {
  const lastMessageDate = new Date(lastMessageTimestamp);
  if (isNaN(lastMessageDate.getTime())) return 'invalid';
  const now = new Date();
  const yearDifference = now.getFullYear() - lastMessageDate.getFullYear();

  if (yearDifference === 0) {
    const monthDifference = now.getMonth() - lastMessageDate.getMonth();
    const dayDifference = now.getDate() - lastMessageDate.getDate();

    if (monthDifference === 0) {
      if (dayDifference === 0) {
        const hourDifference = now.getHours() - lastMessageDate.getHours();
        if (hourDifference === 0) {
          const minuteDifference = now.getMinutes() - lastMessageDate.getMinutes();
          if (minuteDifference === 0) {
            const secondDifference = now.getSeconds() - lastMessageDate.getSeconds();
            return `${secondDifference} sec${secondDifference > 1 ? 's' : ''} ago`;
          } else return `${minuteDifference} min${minuteDifference > 1 ? 's' : ''} ago`;
        } else return `${hourDifference} hr${hourDifference > 1 ? 's' : ''} ago`;
      } else return `${dayDifference} day${dayDifference > 1 ? 's' : ''} ago`;
    } else {
      const absoluteMonthDifference = Math.abs(monthDifference);
      return `${absoluteMonthDifference} month${absoluteMonthDifference > 1 ? 's' : ''} ago`;
    }
  } else return `${yearDifference} yr${yearDifference > 1 ? 's' : ''} ago`;
};
