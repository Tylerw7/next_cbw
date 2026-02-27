import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cabinetrybywettach.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://cabinetrybywettach.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://cabinetrybywettach.com/contact-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
        url: "https://cabinetrybywettach.com/kitchen",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
  ];
}