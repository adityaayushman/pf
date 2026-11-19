import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pf-eight-xi.vercel.app";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/work/road-guardian`, lastModified: new Date() },
  ];
}
