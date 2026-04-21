import type { MetadataRoute } from 'next'
import { serviceAreaDetails } from '@/content/home'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://neighborslawn.com'
  const now = new Date()



  const cityRoutes: MetadataRoute.Sitemap = serviceAreaDetails.map((area) => ({
    url: `${base}/service-areas/${area.city.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  return [
    ...cityRoutes,
    { url: base, lastModified: now, priority: 1.0 },
    { url: `${base}/mowing-lawn-care`, lastModified: now, priority: 0.9 },
    { url: `${base}/landscaping`, lastModified: now, priority: 0.9 },
    { url: `${base}/fertilizer-weed-control`, lastModified: now, priority: 0.9 },
    { url: `${base}/aeration-overseeding`, lastModified: now, priority: 0.9 },
    { url: `${base}/pricing`, lastModified: now, priority: 0.8 },
    { url: `${base}/about`, lastModified: now, priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, priority: 0.8 },
    { url: `${base}/before-after`, lastModified: now, priority: 0.7 },
    { url: `${base}/service-areas`, lastModified: now, priority: 0.7 },
    { url: `${base}/reviews`, lastModified: now, priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, priority: 0.6 },
  ]
}
