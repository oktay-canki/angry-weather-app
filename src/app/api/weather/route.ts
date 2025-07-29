import OpenWeatherService from "@/services/openWeather";
import { GeoPosition } from "@/types/geo";
import { validateCoordinates } from "@/utils/validation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  let position: GeoPosition;

  try {
    position = validateCoordinates(
      searchParams.get("latitude"),
      searchParams.get("longitude")
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid latitude or longitude!" },
      { status: 400 }
    );
  }

  try {
    const weatherData = await OpenWeatherService.getWeatherFromPosition(
      position.latitude,
      position.longitude
    );
    return NextResponse.json(weatherData);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
