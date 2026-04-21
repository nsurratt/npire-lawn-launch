import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://neighborslawn.com'
  const now = new Date()



    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  return [
    { url: base, lastModified: now, priority: 1.0 },
    { url: `${base}/mowing-lawn-care`, lastModified: now, priority: 0.9 },
    { url: `${base}/fertilizer-weed-control`, lastModified: now, priority: 0.9 },
    { url: `${base}/about`, lastModified: now, priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, priority: 0.8 },
    { url: `${base}/service-areas`, lastModified: now, priority: 0.7 },
    { url: `${base}/reviews`, lastModified: now, priority: 0.7 },
  ]
}
