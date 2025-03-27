declare global {
	type OpenGraph =
		| (OpenGraphBase & {
				type?: "music.song";
				musicSong: MusicSongOpenGraph;
		  })
		| (OpenGraphBase & {
				type?: "music.album";
				musicAlbum: MusicAlbumOpenGraph;
		  })
		| (OpenGraphBase & {
				type?: "music.playlist";
				musicPlaylist: MusicPlaylistOpenGraph;
		  })
		| (OpenGraphBase & {
				type?: "music.radio_station";
				musicRadioStation: MusicRadioStationOpenGraph;
		  })
		| (OpenGraphBase & {
				type?: "video.movie";
				videoMovie: VideoMovieOpenGraph;
		  })
		| (OpenGraphBase & {
				type?: "video.episode";
				videoEpisode: VideoEpisodeOpenGraph;
		  })
		| (OpenGraphBase & {
				type?: "video.tv_show";
				videoTvShow: VideoTvShowOpenGraph;
		  })
		| (OpenGraphBase & {
				type?: "video.other";
				videoOther: VideoOtherOpenGraph;
		  })
		| (OpenGraphBase & {
				type?: "article";
				article: ArticleOpenGraph;
		  })
		| (OpenGraphBase & {
				type?: "book";
				book: BookOpenGraph;
		  })
		| (OpenGraphBase & {
				type?: "profile";
				profile: ProfileOpenGraph;
		  })
		| (OpenGraphBase & {
				type?: "website";
		  });

	type OpenGraphBase = {
		/**
		 * The title of your object as it should appear within the graph, e.g., "The Rock".
		 */
		title?: string;
		/**
		 * The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required.
		 */
		type?:
			| "music.song"
			| "music.album"
			| "music.playlist"
			| "music.radio_station"
			| "video.movie"
			| "video.episode"
			| "video.tv_show"
			| "video.other"
			| "article"
			| "book"
			| "profile"
			| "product"
			| "website";
		/**
		 * A one to two sentence description of your object.
		 */
		description?: string;
		/**
		 * The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "https://www.imdb.com/title/tt0117500/".
		 */
		url?: string;
		/**
		 * The word that appears before this object's title in a sentence. An enum of (a, an, the, "", auto). If auto is chosen, the consumer of your data should chose between "a" or "an". Default is "" (blank).
		 */
		determiner?: string;
		/**
		 * The locale these tags are marked up in. Of the format language_TERRITORY. Default is en_US.
		 */
		locale?: string;
		/**
		 * An array of other locales this page is available in.
		 */
		localeAlternate?: string[];
		/**
		 * If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb".
		 */
		siteName?: string;
		/**
		 * A URL to an audio file to accompany this object.
		 */
		audio?: AudioOpenGraph;
		/**
		 * An image URL which should represent your object within the graph.
		 */
		image?: ImageOpenGraph;
		/**
		 * A URL to a video file that complements this object.
		 */
		video?: VideoOpenGraph;
	};

	type AudioOpenGraph = {
		url: string;
		/**
		 * An alternate url to use if the webpage requires HTTPS.
		 */
		secureUrl: string;
		/**
		 * The MIME type.
		 */
		type?: string;
	};

	type ImageOpenGraph = {
		url: string;
		/**
		 * An alternate url to use if the webpage requires HTTPS.
		 */
		secureUrl: string;
		/**
		 * The MIME type.
		 */
		type?: string;
		/**
		 * The number of pixels wide.
		 */
		width?: number;
		/**
		 * The number of pixels high.
		 */
		height?: number;
		/**
		 * A description of what is in the image (not a caption).
		 */
		alt: string;
	};

	type VideoOpenGraph = ImageOpenGraph;

	type MusicSongOpenGraph = {
		/**
		 * The song's length in seconds. Must be an integer greater than or equal to 1.
		 */
		duration: number;
		/**
		 * The album this song is from.
		 */
		album?: MusicAlbumOpenGraph[];
		/**
		 * Which disc of the album this song is on. Must be an integer greater than or equal to 1.
		 */
		albumDisc?: number;
		/**
		 * Which track this song is. Must be an integer greater than or equal to 1.
		 */
		albumTrack?: number;
		/**
		 * The musician that made this song.
		 */
		musician?: ProfileOpenGraph[];
	};

	type MusicAlbumOpenGraph = {
		/**
		 * The song on this album.
		 */
		song?: MusicSongOpenGraph;
		/**
		 * The same as albumDisc but in reverse. Must be an integer greater than or equal to 1.
		 */
		songDisc?: number;
		/**
		 * The same as albumTrack but in reverse. Must be an integer greater than or equal to 1.
		 */
		songTrack?: number;
		/**
		 * The musician that made this song.
		 */
		musician?: ProfileOpenGraph;
		/**
		 * The date the album was released.
		 */
		releaseDate?: string;
	};

	type MusicPlaylistOpenGraph = {
		/**
		 * Identical to the ones on MusicAlbum.
		 */
		song?: MusicSongOpenGraph;
		songDisc?: number;
		songTrack?: number;
		/**
		 * The creator of this playlist.
		 */
		creator?: ProfileOpenGraph;
	};

	type MusicRadioStationOpenGraph = {
		/**
		 * The creator of this station.
		 */
		creator?: ProfileOpenGraph;
	};

	// Placeholder for the Profile type, replace with your actual Profile type definition
	type ProfileOpenGraph = {
		// ... your Profile type properties here
	};

	type VideoMovieOpenGraph = {
		/**
		 * Actors in the movie.
		 */
		actor?: ProfileOpenGraph[];
		/**
		 * The role they played.
		 */
		actorRole?: string;
		/**
		 * Directors of the movie.
		 */
		director?: ProfileOpenGraph[];
		/**
		 * Writers of the movie.
		 */
		writer?: ProfileOpenGraph[];
		/**
		 * The movie's length in seconds. Must be an integer greater than or equal to 1.
		 */
		duration: number;
		/**
		 * The date the movie was released.
		 */
		releaseDate?: string;
		/**
		 * Tag words associated with this movie.
		 */
		tag?: string[];
	};

	type VideoEpisodeOpenGraph = {
		/**
		 * Actors in the movie.
		 */
		actor?: ProfileOpenGraph[];
		/**
		 * The role they played.
		 */
		actorRole?: string;
		/**
		 * Directors of the movie.
		 */
		director?: ProfileOpenGraph[];
		/**
		 * Writers of the movie.
		 */
		writer?: ProfileOpenGraph[];
		/**
		 * The movie's length in seconds. Must be an integer greater than or equal to 1.
		 */
		duration: number;
		/**
		 * The date the movie was released.
		 */
		releaseDate?: string;
		/**
		 * Tag words associated with this movie.
		 */
		tag?: string[];
		/**
		 * Which series this episode belongs to.
		 */
		series?: VideoTvShowOpenGraph;
	};

	/**
	 * A multi-episode TV show. The metadata is identical to video.movie.
	 */
	type VideoTvShowOpenGraph = VideoMovieOpenGraph;

	/**
	 * A video that doesn't belong in any other category. The metadata is identical to video.movie.
	 */
	type VideoOtherOpenGraph = VideoMovieOpenGraph;

	type ArticleOpenGraph = {
		/**
		 * When the article was first published.
		 */
		publishedTime?: string;
		/**
		 * When the article was last changed.
		 */
		modifiedTime?: string;
		/**
		 * When the article is out of date after.
		 */
		expirationTime?: string;
		/**
		 * Writers of the article.
		 */
		author?: ProfileOpenGraph[];
		/**
		 * A high-level section name. E.g. Technology.
		 */
		section?: string;
		/**
		 * Tag words associated with this article.
		 */
		tag?: string[];
	};

	type BookOpenGraph = {
		/**
		 * Who wrote this book.
		 */
		author?: ProfileOpenGraph[];
		/**
		 * The ISBN.
		 */
		isbn?: string;
		/**
		 * The date the book was released.
		 */
		releaseDate?: string;
		/**
		 * Tag words associated with this book.
		 */
		tag?: string[];
	};

	type ProfileOpenGraph = {
		/**
		 * A name normally given to an individual by a parent or self-chosen.
		 */
		firstName?: string;
		/**
		 * A name inherited from a family or marriage and by which the individual is commonly known.
		 */
		lastName?: string;
		/**
		 * A short unique string to identify them.
		 */
		username?: string;
		/**
		 * Their gender.
		 */
		gender?: "male" | "female";
	};
}
export {};
