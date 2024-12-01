<script>
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	inject({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();

	let y = 0;
	let innerHeight = 0;
	let innerWidth = 0;

	function goToTop() {
		document.body.scrollIntoView();
	}
</script>

<div class="relative flex flex-col max-w-[100%] mx-auto w-full text-sm sm:min-h-screen">
	<div class="flex flex-col">
		<div
			class={'fixed bottom-0 right-0 duration-200 flex p-10 z-10' +
				(y > 0 ? ' opacity-full pointer-events-auto' : ' pointer-events-none opacity-0')}
		>
			<button
				on:click={goToTop}
				class="ml-auto rounded-full aspect-square bg-primary10 text-peach px-4 hover:bg-primary80 duration-300"
				aria-label="Go to top"
			>
				<i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i>
			</button>
		</div>
	</div>
	<Header {y} />
	<div>
		<slot />
	</div>
	<div class="flex">
		<div class="w-[92%] z-20">
			<Footer />
		</div>
		<div class="w-[8%] z-0"></div>
	</div>
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
