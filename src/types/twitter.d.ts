/**
 * Represents a Twitter card.
 */
type TwitterCard = {
	/**
	 * The card type.
	 * Used with all cards.
	 * If an og:type, og:title and og:description exist in the markup but twitter:card is absent, then a summary card may be rendered.
	 */
	twitterCard: "summary" | "summary_large_image" | "app" | "player";
	/**
	 * Either twitter:site or twitter:site:id is required.
	 * Used with summary, summary_large_image, app, player cards
	 */
	site?: {
		/**
		 * @username of website.
		 * Used with summary, summary_large_image, app, player cards
		 */
		username?: string;
		/**
		 * Same as twitter:site, but the user’s Twitter ID.
		 * Used with summary, summary_large_image, player cards
		 */
		id?: string;
	};
	/**
	 * Creator Inforamtion.
	 */
	creator?: {
		/**
		 * @username of content creator
		 * Used with summary_large_image cards
		 */
		username?: string;
		/**
		 * Twitter user ID of content creator
		 * Used with summary, summary_large_image cards
		 */
		id?: string;
	};
	/**
	 * Description of content (maximum 200 characters)
	 * Used with summary, summary_large_image, player cards
	 * og:description
	 */
	description?: string;
	/**
	 * Title of content (max 70 characters).
	 * Used with summary, summary_large_image, player cards.
	 * og:title
	 */
	title?: string;
	/**
	 * Image information.
	 */
	image?: TwitterImage;
	/**
	 * Player information.
	 */
	player?: TwitterPlayer;
	/**
	 * App information.
	 */
	app?: TwitterApp;
};

type TwitterImage = {
	/**
	 * URL of image to use in the card. Images must be less than 5MB in size.
	 * JPG, PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used.
	 * SVG is not supported.
	 * Used with summary, summary_large_image, player cards.
	 * og:image
	 */
	url?: string;
	/**
	 * A text description of the image conveying the essential nature of an image to users who are visually impaired.
	 * Maximum 420 characters.
	 * Used with summary, summary_large_image, player cards.
	 * og:image:alt
	 */
	alt?: string;
};

/**
 * Represents the player information for a Twitter card.
 */
type TwitterPlayer = {
	/**
	 * HTTPS URL of player iframe.
	 * Used with player card.
	 */
	url?: string;
	/**
	 * Width of iframe in pixels.
	 * Used with player card.
	 */
	width?: string;
	/**
	 * Height of iframe in pixels.
	 * Used with player card.
	 */
	height?: string;
	/**
	 * URL to raw video or audio stream.
	 * Used with player card.
	 */
	stream?: string;
};

/**
 * Represents the app information for a Twitter card.
 */
type TwitterApp = {
	/**
	 * Information for iPhone app.
	 */
	iphone?: TwitterAppPlatform;
	/**
	 * Information for iPad app.
	 */
	ipad?: TwitterAppPlatform;
	/**
	 * Information for Google Play app.
	 */
	googleplay?: TwitterAppPlatform;
};
/**
 * Represents app information for a specific platform (iPhone, iPad, Google Play).
 */
type TwitterAppPlatform = {
	/**
	 * Name of your app.
	 */
	name?: string;
	/**
	 * Your app ID in the respective app store.
	 */
	id?: string;
	/**
	 * Your app’s custom URL scheme.
	 */
	url?: string;
};
