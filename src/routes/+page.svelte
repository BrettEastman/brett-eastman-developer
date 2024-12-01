<script lang="ts">
	import benefits from '$lib/benefits';
	import experiences from '$lib/experiences';
	import projects from '$lib/projects';
	import Project from '../components/Project.svelte';
	import Title from '../components/Title.svelte';
	import Meta from '../components/Meta.svelte';
</script>

<Meta />

<main class="flex flex-col flex-1 scroller">
	<section id="hero" class="z-[-1]">
		<Title />
	</section>

	<section id="introPage" class="grid grid-cols-1 mx-6 lg:grid-cols-2 gap-10 py-8 sm:py-14">
		<div class="relative grid place-items-center">
			<img
				class="object-cover z-[2] max-h-[45vh] rounded-3xl"
				src={'images/Brett-Potrero-BW.jpeg'}
				alt="Brett Eastman profile headshot"
				aria-label="Brett Eastman profile headshot"
			/>
		</div>
		<div class="flex flex-col lg:justify-center tex-center lg:text-left gap-6 md:gap-8 lg:gap-10">
			<h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
				HELLO, <br /> I'M <span class="noto text-peach">BRETT, </span>
			</h2>
			<p class="font-light sm:text-lg md:text-xl">
				a Full Stack
				<span class="noto text-peach">Developer</span>
				based in San Francisco. My determination, outgoing nature, and imaginativeness make me a great
				engineer to have on your team. As a
				<a
					class="text-blueGrey hover:border-b duration-100"
					href="https://www.brettaustineastman.com/"
					target="_blank"
					aria-label="Brett Eastman musician website"
				>
					musician
				</a>, I have always played in groups where everyone works towards a common good. Working on
				a team of developers is no different. If I’m not coding, I might be out with my wife for a
				walk in San Francisco, playing drums, or going to a concert.
			</p>
		</div>
	</section>

	<section id="experience" class="py-8 flex flex-col gap-4 md:gap-16 md:py-20 lg:py-32">
		<h2
			class="font-normal m-auto text-primary80 text-2xl mt-12 sm:text-3xl md:text-4xl lg:text-5xl"
		>
			EXPERIENCE
		</h2>
		<h2
			class="font-normal text-primary70 text-xl ml-12 mt-4 sm:text-2xl md:text-3xl lg:text-4xl lg:ml-20"
		>
			Professional
		</h2>
		<div class="flex flex-col ml-2 gap-4 sm:ml-12 sm:gap-24">
			{#each experiences as experience, index}
				<div class="grid grid-cols-1 p-8 gap-12 md:grid-cols-[20%_30%_40%]">
					<div
						class="w-full aspect-auto border border-primary20 rounded-xl max-h-40 p-[5%] md:p-[10%]"
					>
						<div class="w-full h-full relative flex items-center justify-center">
							<p class="absolute top-0 left-0 text-primary60">0{index + 1}.</p>
							<h3
								class="font-normal text-md text-center text-primary70 sm:text-lg md:text-xl lg:text-2xl"
							>
								{experience.name}
							</h3>
						</div>
					</div>
					<a
						href={experience.url}
						target="_blank"
						class="hover:scale-110 duration-200"
						aria-label={experience.url}
					>
						<img
							class="object-cover rounded-xl"
							src={experience.image}
							alt={experience.name}
							aria-label={`Cover image of ${experience.name}`}
						/>
					</a>
					<Project project={experience} />
				</div>
			{/each}

			<h2 class="font-normal text-primary70 text-xl ml-12 mt-8 sm:text-2xl md:text-3xl lg:text-4xl">
				Projects
			</h2>
			<div class="flex flex-col ml-2 gap-4 sm:ml-12 sm:gap-24">
				{#each projects as project, index}
					<div class="grid grid-cols-1 p-8 gap-12 md:grid-cols-[20%_30%_40%]">
						<div
							class="w-full aspect-auto border border-primary20 rounded-xl max-h-40 p-[5%] md:p-[10%]"
						>
							<div class="w-full h-full relative flex items-center justify-center">
								<p class="absolute top-0 left-0 text-primary60">0{index + 1}.</p>
								<h3
									class="font-normal text-md text-center text-primary70 sm:text-lg md:text-xl lg:text-2xl"
								>
									{project.name}
								</h3>
							</div>
						</div>
						{#if project.url}
							<a
								href={project.url}
								target="_blank"
								class="hover:scale-110 duration-200"
								aria-label={`Link to ${project.name} site`}
							>
								<img
									class="object-cover rounded-xl"
									src={project.image}
									alt={project.name}
									aria-label={`Cover image of ${project.name}`}
								/>
							</a>
						{:else}
							<img
								class="object-cover rounded-xl"
								src={project.image}
								alt={project.name}
								aria-label={`Cover image of ${project.name}`}
							/>
						{/if}
						<Project {project} />
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section
		id="about"
		class="py-20 pt-10 relative lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24"
	>
		<div
			class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-greyPeach after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-greyPeach py-4"
		>
			<h6 class="text-primary100 text-lg sm:text-xl md:text-2xl">Want to know a bit more</h6>
			<h3 class="text-primary90 font-semibold text-2xl sm:text-4xl md:text-5xl">
				about <span class="noto text-peach">me?</span>
			</h3>
		</div>
		<p class="text-primary80 mx-auto noto font-semibold text-lg sm:text-xl md:text-2xl">I am...</p>
		<div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
			{#each benefits as benefit, index}
				<div class="flex gap-6 sm:gap-8">
					<p class="ml-3 noto text-4xl text-peach sm:text 5xl md:text-6xl text-500 font-semibold">
						{`0${index + 1}.`}
					</p>
					<div class="flex flex-col gap-6 sm:gap-8">
						<h3 class="mt-2 text-2xl text-primary50 sm:text-3xl md:text-5xl">
							{benefit.name}
						</h3>
						<p class="text-lg mr-3">{benefit.description}</p>
					</div>
				</div>
			{/each}
		</div>
		<div class="flex justify-between">
			<div class="button-div">
				<a
					href="https://drive.google.com/file/d/1VMWGVYd4ZRMj2lgteqNLrNgke7RFWYjr/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					class="text-lg px-4 relative z-4"
					aria-label="Brett Eastman resume">Resume</a
				>
			</div>
		</div>
	</section>
</main>

<style>
	#hero {
		background: radial-gradient(var(--peach), 85%, var(--primary40));
	}

	.button-div {
		margin: auto;
		padding: 1rem;
		border-radius: 0.75rem;
		border: 2px solid var(--peachGrey);
		color: var(--peachGrey);
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
