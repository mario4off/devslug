import { UrlMeta } from "../generated/prisma/client";

export default function generatePreview(data: UrlMeta) {
  return `
    <!DOCTYPE html>
  <html>
    <head>
         <title>${data.title}</title>
        <meta property="og:title" content="${data.title}">
        <meta property="og:description" content="${data.description}">
        <meta property="og:image" content="${data.image}">
        <link rel="icon" href="${data.favicon}">
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="${data.title}">
        <meta name="twitter:description" content="${data.description}">
        <meta name="twitter:image" content="${data.image}">
    </head>
    <body></body>
    </html>`;
}
