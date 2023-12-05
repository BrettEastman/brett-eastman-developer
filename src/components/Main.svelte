<script>
	import Project from './Project.svelte';
	import Title from './Title.svelte';

	let projects = [
		{
			name: 'Ranked Choice',
			href: 'https://github.com/BrettEastman/RankedChoice',
			icon: 'fa-solid fa-check-to-slot',
			description:
				'The Ranked Choice Voting Calculator is a single page web application designed to facilitate the tally of a ranked choice vote involving 3-5 candidates and up to 20 voters. I originally came up with this idea to solve a problem. My friends and I have a music listening group where we use ranked-choice voting to decide what album we will listen to together. I chose Svelte as the framework because of its small bundle size and fast load times. I used Vite as the bundler because of its speed and ease of use. I also used Tailwind for styling because of its utility-first approach.',
			technologies: 'Svelte, Vite, TypeScript, Tailwind',
			image: 'images/RCVC-display.png'
		},
		{
			name: 'Listening Roulette',
			href: 'https://github.com/BrettEastman/listeningRouletteNext',
			icon: 'fa-solid fa-circle-play',
			description:
				'Listening Roulette is a social music app enabling friends to listen to music together while chatting in real-time. I integrated an OpenAI-powered chatbot to provide background on artists, creating a more educational music experience. It was built with Firebase for authentication and scalability, and Styled Components for a reusable UI component library. The app uniquely combines real-time synchronization, AI enrichment, and reusable architectures to create an engaging way to share music.',
			technologies:
				'React, OpenAI, Next.js, Typescript, Firebase Authentication, Firestore, Styled-components',
			image: 'images/ListeningRoulette-display.png'
		},
		{
			name: 'Dinomite Designs',
			href: 'https://github.com/BrettEastman/Dinomite-Designs',
			icon: 'fa-brands fa-pied-piper-hat',
			description:
				"Dinomite Designs is a Full Stack project where my team redesigned and optimized a retail website's product portal including details, Q&A, reviews and recommendations. I leveraged React context for simplified state management and component architecture. On the backend, I enhanced performance through SQL and JavaScript query optimizations, reducing HTTP durations by 25%. I implemented load balancing across multiple AWS EC2 instances with NGINX to achieve 12ms response time per query at 1000rps throughput with 0% errors. This project exemplifies not only my frontend UX skills, but also my performance-focused approach to the backend, applying data caching, query optimizations, cloud scaling and load testing to significantly improve customer experience.",
			technologies:
				'Webpack, React, Node.js, PostgreSQL, AWS, Express, NGINX, Jest, K6, Loader.io, New Relic',
			image: 'images/Dinomite-display.png'
		},
		{
			name: 'Harper Woodward',
			href: 'https://github.com/BrettEastman/Harper-Woodward',
			icon: 'fa-solid fa-guitar',
			description:
				'Harper Woodward is a web application for holding live stream concerts with live chat between the viewers and the artist. The app requires authentication and is a secure space for the artist to connect with their audience in an intimate live setting. As Project Manager and Full Stack Developer, I brought a team of 7 engineers through critical decisions regarding DBMS, project architecture, authentication, Git workflows, and division of labor, while at the same time implementing and desiging the Firebase authentication UI.',
			technologies: 'Vite, React, Node.js, Firebase, Tailwind',
			image: 'images/Harper-display.png'
		}
	];

	let projectCompass = {
		name: 'Project Compass',
		href: 'https://github.com/sfbrigade/compass',
		icon: 'fa-solid fa-diagram-project',
		description:
			"As a volunteer Full Stack Software Engineer at Code For San Francisco, I am on a team of developers and designers, currently working on Project Compass, which is a web application to streamline the process of setting and recording Individual Educational Plan (IEP) data for students with disabilities, for the San Francisco Unified School District (SFUSD). I was responsible for implementing a feature to the project, using Nodemailer, to automatically send confirmation emails to new para-professionals as they are added to the database by the teacher. I also engineered the design team's designs for the Student page and Staff page, implementing the backend procedures to allow teachers to add/edit/remove students and paras.",
		technologies: 'Next.js, TRPC, Typescript, Postgres, Keysely, Zod, Figma, MaterialUI, Ava',
		image: 'images/ProjectCompass-display.png'
	};

	let benefits = [
		{
			name: 'a full stack developer',
			description:
				'I have a passion for building things and solving problems. I love to learn and I am always looking for new opportunities to grow. I have a unique perspective that contributes to my approach to solving complex engineering problems. But, more importantly, I have grit and determination.'
		},
		{
			name: 'an excellent communicator',
			description:
				'Communication is key. I believe in positive reinforcement, transparency and constructive communication. This helps develop effective and productive relationships in the work space. When colleagues have a good rapport, they want to get the job done. They want the team succeed because they like the team.'
		},
		{
			name: 'a musician',
			description:
				'My journey into the world of software engineering did not follow a traditional path. I embarked on this transformation after having previously established myself as a musician, composer, recording engineer, and teacher. This artistic foundation has instilled in me the power of creativity, which enables me to envision innovative solutions to technical challenges.'
		}
	];
</script>

<main class="flex flex-col flex-1">
	<section id="hero" class="z-[-1]">
		<Title />
	</section>

	<section id="introPage" class="grid grid-cols-1 mx-6 lg:grid-cols-2 gap-10 py-8 sm:py-14">
		<div class="relative grid place-items-center">
			<img
				class="object-cover z-[2] max-h-[45vh] rounded-3xl"
				src={'images/Brett-headshot.jpeg'}
				alt="Brett Eastman profile headshot"
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
				>
					musician
				</a>, I have always played in groups where everyone works towards a common good. Working on
				a team of developers is no different. If I’m not coding, I might be out with my wife for a
				walk in San Francisco or going to a concert. Tech stack includes
				<span class="text-peach"
					>React, Svelte, Node, Express, MongoDB, Firebase and PostgreSQL.</span
				>
			</p>
		</div>
	</section>

	<section id="projects" class="py-8 flex flex-col gap-4 md:gap-16 md:py-20 lg:py-32">
		<h2
			class="font-normal m-auto text-primary80 text-2xl mt-12 sm:text-3xl md:text-4xl lg:text-5xl"
		>
			PROJECTS
		</h2>
		<h2
			class="font-normal text-primary70 text-xl ml-12 mt-4 sm:text-2xl md:text-3xl lg:text-4xl lg:ml-20"
		>
			Freelance
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
					<img class="object-cover rounded-xl" src={project.image} alt={project.name} />
					<Project {project} />
				</div>
			{/each}
		</div>
		<h2 class="font-normal text-primary70 text-xl ml-12 mt-8 sm:text-2xl md:text-3xl lg:text-4xl">
			Volunteer
		</h2>
		<div class="ml-2 gap-24 sm:ml-12">
			<div class="grid grid-cols-1 p-8 gap-12 md:grid-cols-[20%_30%_40%]">
				<div
					class="w-full aspect-auto border border-primary20 rounded-xl max-h-40 p-[5%] md:p-[10%]"
				>
					<div class="w-full h-full relative flex items-center justify-center">
						<p class="absolute top-0 left-0 text-primary60">05.</p>
						<h3
							class="font-normal text-md text-center text-primary70 sm:text-lg md:text-xl lg:text-2xl"
						>
							{projectCompass.name}
						</h3>
					</div>
				</div>
				<img class="object-cover rounded-xl" src={projectCompass.image} alt={projectCompass.name} />
				<Project project={projectCompass} />
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
			<h6 class="text-lg sm:text-xl md:text-2xl">Would you like to know a bit more</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				about <span class="noto text-peach">me?</span>
			</h3>
		</div>
		<p class="mx-auto noto font-semibold text-lg sm:text-xl md:text-2xl">I am ...</p>
		<div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
			{#each benefits as benefit, index}
				<div class="flex gap-6 mx-4 sm:gap-8">
					<p class="noto text-4xl text-peach sm:text 5xl md:text-6xl text-500 font-semibold">
						0{index + 1}
					</p>
					<div class="flex flex-col gap-6 sm:gap-8">
						<h3 class="text-2xl text-primary50 sm:text-3xl md:text-5xl">{benefit.name}</h3>
						<p>{benefit.description}</p>
					</div>
				</div>
			{/each}
		</div>
		<div class="flex justify-between">
			<div class="button-div">
				<a
					href="https://drive.google.com/file/d/1CNaNL7DbyMY5GFe37VaYBC_wNFruFRKB/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					class="text-lg px-4 relative z-4">Resume</a
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
