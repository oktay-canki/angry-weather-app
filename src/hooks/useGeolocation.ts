import GeolocationService from "@/services/geolocation";
import { GeoPosition } from "@/types/geo";
import { useCallback, useEffect, useState } from "react";

function useGeolocation() {
  const [position, setPosition] = useState<GeoPosition | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosition = useCallback(() => {
    setLoading(true);
    setError(null);

    GeolocationService.getCurrentPosition()
      .then((position) => {
        setPosition(position);
      })
      .catch((err) => {
        setError(err.msg || "Error while fetching geolocation information");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchPosition();
  }, [fetchPosition]);

  return { position, loading, error, refresh: fetchPosition };
}

export default useGeolocation;
