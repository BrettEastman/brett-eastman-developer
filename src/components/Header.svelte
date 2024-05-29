<script lang="ts">
	export let y = 0;

	let tabs = [
		{ name: 'EXPERIENCE ', link: '#experience' },
		{ name: 'ABOUT', link: '#about' },
		{ name: 'CONTACT', link: 'https://www.linkedin.com/in/brett-austin-eastman/' }
	];
</script>

<header
	class={'sticky z-[10] top-0 duration-200 px-6 flex justify-evenly items-center bg-transparent sm:justify-end' +
		(y > 0 ? ' py-4' : ' py-6')}
>
	<div class="flex gap-8 sm:ml-auto sm:gap-12">
		{#each tabs as tab, index}
			<a href={tab.link} class="duration-200 hover:text-peach">
				<p>{tab.name}</p>
			</a>
		{/each}
	</div>
</header>
