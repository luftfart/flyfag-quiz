/* eslint-disable @typescript-eslint/no-unused-vars */
import { generateSiteUrl, escapeXml, removeQueryParameters } from '$lib/utils/api';
// import { google } from 'googleapis';

const render = async (originUrl: string): Promise<string> =>
	`<?xml version='1.0' encoding='utf-8'?>
  <urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">
    <url>
      <loc>${originUrl}</loc>
    </url>
    ${await generateSiteUrl().then((allurls) =>
			allurls
				.map(
					(singleUrl: { url: string; image: string; title: string; description: string }) =>
						`
                <url>
                <loc>${escapeXml(originUrl + singleUrl.url)}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <priority>0.95</priority>
                <changefreq>daily</changefreq>
              
                  ${
										singleUrl.image &&
										`
                  <image:image>
                    <image:loc>${escapeXml(
											removeQueryParameters(singleUrl.image, ['width', 'f', 'q', 'usqp'])
										)}</image:loc>
                    <image:caption>${escapeXml(
											encodeURIComponent(singleUrl.description)
										)}</image:caption>
                    <image:geo_location>Norway</image:geo_location>
                    <image:title>${escapeXml(encodeURIComponent(singleUrl.title))}</image:title>
                  </image:image>
                  `
									}
                  
              </url>
              `
				)
				.join('')
		)}
    
  </urlset>`.trim();

export const trailingSlash = 'never';

export const GET = async ({ url }) => {
	// ping google to update the the urls of the company and the images
	// pingGoogle(Number(params.page), url.origin);
	return new Response(await render(url.origin), {
		headers: {
			'content-type': 'application/xml; charset=utf-8'
		}
	});
};

new Response();