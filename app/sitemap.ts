import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://theatroexarchis.gr',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://theatroexarchis.gr/theater',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://theatroexarchis.gr/theater-lab',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://theatroexarchis.gr/archive',
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: 'https://theatroexarchis.gr/about-us',
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: 'https://theatroexarchis.gr/news',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://theatroexarchis.gr/contact-us',
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}
