// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://eminence-astro-cf.xeffen25.workers.dev/",
	i18n: {
		defaultLocale: "es",
		locales: ["es"],
	},

	output: "server",
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [sitemap()],
});
