import { ogRouteImageResponse } from "@/lib/og-route-image";

export const alt = "Contact Rosie Personal Care Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return ogRouteImageResponse("contact.png");
}
