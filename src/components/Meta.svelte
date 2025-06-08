<script>
	import { page } from '$app/stores';

	/**
	 * @typedef {Object} Props
	 * @property {string} [title]
	 * @property {string} [description]
	 * @property {string} [keywords]
	 * @property {string} [ogImage]
	 */

	/** @type {Props} */
	let {
		title = 'Brett Eastman - Full Stack Developer',
		description = 'Brett Austin Eastman is a software engineer and musician based in San Francisco. He specializes in React, Svelte, Node, Firebase, MongoDB, and PostgreSQL.',
		keywords = 'software development, web design, SEO',
		ogImage = '/images/Brett-headshot.jpeg'
	} = $props();

	let fullUrl = $derived($page.url.href);
	let fullImageUrl = $derived(new URL(ogImage, $page.url.origin).href);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />

	<meta property="og:url" content={fullUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={fullImageUrl} />
	<meta property="og:image:type" content="image/jpeg" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={fullImageUrl} />
</svelte:head>
