<script>
	/**
	 * @type {{ name: string; href: string; icon: string; description: string; technologies: string; image: string}}
	 */
	export let project;
</script>

<div>
	<a
		href={project.href}
		target="_blank"
		class="p-4 sm:p-6 md:p-8 aspect-auto flex flex-col gap-4 rounded-xl border border-solid border-primary20 group cursor-pointer hover:border-peach duration-200"
	>
		<div
			class="bg-primary10 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
		>
			<i class={project.icon} />
		</div>

		<p class="text-primary60 sm:text-md md:text-lg">{project.description}</p>
		<div>
			<p class="text-primary30">Technologies:</p>
			<strong class="text-peach">{project.technologies}</strong>
		</div>
		<div class="flex justify-between">
			<div
				class="ml-auto p-2 rounded-xl cursor-pointer hover:text-primary10 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:w-full after:h-full after:bg-peachGrey after:duration-300 hover:after:translate-x-full after:z-[-1] overflow-hidden"
			>
				<p class="relative z-4">View code &rarr;</p>
			</div>
		</div>
	</a>
</div>
