<script lang="ts">
	let { project } = $props();
</script>

<div>
	<a
		href={project.href}
		target="_blank"
		class="p-4 sm:p-6 md:p-8 aspect-auto flex flex-col gap-4 rounded-xl border border-solid border-primary20 group cursor-pointer hover:border-peach duration-200"
		aria-label={`Link to ${project.name}`}
	>
		<div
			class="bg-primary10 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
		>
			<i class={project.icon}></i>
		</div>

		<p class="text-primary60 sm:text-md md:text-lg">{project.description}</p>
		<div>
			<p class="text-primary30">tech-stack:</p>
			<strong class="text-peach">{project.technologies}</strong>
		</div>
		<div class="flex justify-between">
			<div class="button-div">
				<p class="relative z-4">View code &rarr;</p>
			</div>
		</div>
	</a>
</div>

<style>
	.button-div {
		margin-left: auto;
		padding: 0.75rem;
		border-radius: 0.75rem;
		cursor: pointer;
		transition-duration: 200ms;
		position: relative;
		overflow: hidden;
	}

	.button-div::after {
		content: '';
		position: absolute;
		top: 0;
		height: 100%;
		right: 100%;
		width: 102%;
		background-color: var(--peachGrey);
		transition-duration: 300ms;
		z-index: -1;
	}

	.button-div:hover {
		color: var(--primary10);
		font-weight: 600;
	}

	.button-div:hover::after {
		transform: translateX(100%);
	}
</style>
