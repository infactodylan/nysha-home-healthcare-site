import { ogRouteImageResponse } from "@/lib/og-route-image";

export const alt = "Companion care services — Rosie Personal Care";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return ogRouteImageResponse("companion-care.png");
}
