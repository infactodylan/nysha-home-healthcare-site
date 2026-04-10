import { ogRouteImageResponse } from "@/lib/og-route-image";

export const alt = "Rosie Personal Care Services — compassionate in-home care";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return ogRouteImageResponse("home.png");
}
