// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import webmanifest from "astro-webmanifest";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

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
	integrations: [
		webmanifest({
			name: "Eminenc Astro Theme for Cloudflare",
			icon: "public/favicon.svg",
			short_name: "Eminence Theme",
			description:
				"A better starting point for Astro projects deployed on Cloudflare so you can just start developing",
			start_url: "/",
			theme_color: "#CC0000",
			background_color: "#CC0000",
			display: "standalone",
			config: {
				outfile: "site.webmanifest",
			},
		}),
		sitemap(),
		robotsTxt(),
	],
});
