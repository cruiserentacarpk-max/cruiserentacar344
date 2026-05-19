import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { vehicles } from "@/data/vehicles";
import { blogs } from "@/data/blogs";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = ["/", "/fleet", "/luxury", "/vans", "/blog", "/about", "/contact"];
        const entries = [
          ...staticPaths.map(p => ({ path: p, changefreq: "weekly", priority: p === "/" ? "1.0" : "0.8" })),
          ...vehicles.map(v => ({ path: `/vehicle/${v.slug}`, changefreq: "monthly", priority: "0.7" })),
          ...blogs.map(b => ({ path: `/blog/${b.slug}`, changefreq: "monthly", priority: "0.6" })),
        ];

        const urls = entries.map(e => `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`);
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
