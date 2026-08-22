<script lang="ts">
	let { project } = $props();
</script>

<div>
	<a
		href={project.href}
		target="_blank"
		class="p-4 sm:p-6 md:p-8 aspect-auto flex flex-col gap-4 rounded-xl border border-solid border-border group cursor-pointer hover:border-accent duration-200"
		aria-label={`Link to ${project.name}`}
	>
		<div
			class="bg-surface grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
		>
			<i class={project.icon}></i>
		</div>

		<p class="text-content-muted sm:text-base md:text-lg">{project.description}</p>
		<div>
			<p class="text-content-subtle">tech-stack:</p>
			<strong class="text-accent">{project.technologies}</strong>
		</div>
		<div class="flex justify-between">
			<div class="btn-wipe ml-auto p-3 rounded-xl">
				<p class="relative z-4">View code &rarr;</p>
			</div>
		</div>
	</a>
</div>
