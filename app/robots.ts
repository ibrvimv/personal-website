import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: ''
    },
    sitemap: 'https://lvniakea.vercel.app/sitemap.xml',
  }
}
