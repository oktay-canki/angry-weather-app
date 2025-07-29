import { GeoPosition } from "@/types/geo";

export function validateCoordinates(
  latitudeStr: string | null,
  longitudeStr: string | null
): GeoPosition {
  if (!latitudeStr || !longitudeStr) {
    throw Error("Invalid coordinates");
  }

  const latitude = parseFloat(latitudeStr);
  const longitude = parseFloat(longitudeStr);

  if (isNaN(latitude) || isNaN(longitude)) {
    throw Error("Invalid coordinates");
  }

  if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
    throw Error("Invalid coordinates");
  }

  return {
    latitude,
    longitude,
  };
}
