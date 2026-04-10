import { readFile } from "node:fs/promises";
import { join } from "node:path";

const PREVIEW_DIR = join(process.cwd(), "src/assets/og-previews");

export async function ogRouteImageResponse(filename: string): Promise<Response> {
  const buffer = await readFile(join(PREVIEW_DIR, filename));
  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
