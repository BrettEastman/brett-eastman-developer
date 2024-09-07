<script>
	import { page } from '$app/stores';

	export let title = 'Brett Eastman - Full Stack Developer';
	export let description =
		'Brett Austin Eastman is a software engineer and musician based in San Francisco. He specializes in React, Svelte, Node, Firebase, MongoDB, and PostgreSQL.';
	export let keywords = 'software, engineer, web development';
	export let ogImage = '/images/BrettHeadshotBW.jpg';

	$: fullImageURL = new URL(ogImage, $page.url.origin).href;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={fullImageURL} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={fullImageURL} />
</svelte:head>
