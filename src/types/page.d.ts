declare global {
	/**
	 * Defines the SEO properties for a web page.
	 */
	type PageSEO = {
		/**
		 * The title of the page, displayed in the browser's title bar and search engine results.
		 */
		title: string;
		/**
		 * A brief description of the page's content, used in search engine results.
		 */
		description: string;
		/**
		 * The canonical URL of the page, used to prevent duplicate content issues.
		 * Optional.
		 */
		canonical?: string;
		/**
		 * Custom robots meta tag content. Ex: "noindex, nofollow" or "noindex, follow".
		 * @default "index, follow"
		 */
		robots?: string;
		/**
		 * A comma-separated list of keywords related to the page's content.
		 * Optional.
		 */
		keywords?: string;
		/**
		 * The author of the page.
		 * Optional.
		 */
		author?: string;
		/**
		 * Open Graph metadata for social media sharing.
		 * Optional.
		 */
		og?: OpenGraph;
		/**
		 * Twitter metadata for Twitter card display.
		 * Optional.
		 */
		twitter?: Twitter;
	};
}
export {};
