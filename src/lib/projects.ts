export default [
	{
		name: 'Audio Transcriber',
		href: 'https://github.com/BrettEastman/audio-transcriber',
		url: 'https://github.com/BrettEastman/audio-transcriber',
		icon: 'fa-solid fa-microphone',
		description:
			'I built Audio Transcriber, a lightweight browser-based app that converts audio recordings into downloadable text files using a local Whisper server. This project was created to solve my own need for taking accurate notes during conversations with doctors and caregivers. After exploring cloud and desktop options, I designed a local web app powered by a Python/FastAPI backend and a clean Svelte frontend, allowing fast transcription, zero cloud costs, easier handling of large files, and full privacy on my machine. Along the way I learned FastAPI fundamentals, built a modern Svelte store architecture, set up a clean dependency workflow with requirements.txt, and tied the project together with a simple start.sh script. This open-source tool has already improved my daily workflow, and the codebase is available for anyone to use or extend.',
		technologies: 'Svelte, OpenAI Whisper, FastAPI, Python, TypeScript',
		image: 'images/AudioTranscriber-display.png'
	},
	{
		name: 'Brett Eastman Studio',
		href: 'https://github.com/BrettEastman/bretteastmanstudio',
		url: 'https://www.bretteastmanstudio.com/',
		icon: 'fa-solid fa-icons',
		description:
			"For fun and as a way to explore cutting-edge technology, I built and deployed bretteastmanstudio.com—a site hosting my music teaching materials alongside an AI-powered music historian chatbot for students seeking deeper knowledge about artists and topics. I integrated Google's lightweight gemini-2.0-flash model with contextual memory of the past 5 chats to deliver functionality at minimal cost. The backend runs on a cost-effective Linode Nanode instance hosting an open-source Pocketbase database, secured behind an NGINX reverse proxy with HTTPS via Let's Encrypt and rate limiting for protection. The project leverages SvelteKit with Svelte 5 syntax, TypeScript, Tailwind CSS, and Cloudflare, demonstrating my ability to architect full-stack applications that combine modern web technologies with AI integration and robust deployment practices.",
		technologies: 'Svelte, Vite, TypeScript, Tailwind, Cloudflare',
		image: 'images/BEStudio-portfolio.png'
	},
	{
		name: 'Project Compass',
		href: 'https://github.com/sfbrigade/compass',
		url: 'https://staging.compassiep.com/signInPage',
		icon: 'fa-regular fa-compass',
		description:
			"As a volunteer Full Stack Software Engineer at SF Civic Tech, I was on a team of developers and designers working on Project Compass, a web application to streamline the process of setting and recording Individual Educational Plan (IEP) data for students with disabilities, for the San Francisco Unified School District (SFUSD). I was responsible for implementing a feature to the project, using Nodemailer, to automatically send confirmation emails to new para-professionals as they are added to the database by the teacher. I also engineered the design team's designs for the Student page and Staff page, implementing the backend CRUD procedures as well.",
		technologies: 'Next.js, TRPC, TypeScript, Postgres, Keysely, Zod, Figma, MaterialUI, Ava',
		image: 'images/ProjectCompass2-display.png'
	},
	{
		name: 'Ranked Choice',
		href: 'https://github.com/BrettEastman/RankedChoice',
		url: 'https://ranked-choice-three.vercel.app/',
		icon: 'fa-solid fa-check-to-slot',
		description:
			'The Ranked Choice Voting Calculator is a single page web application designed to facilitate the tally of a ranked choice vote involving 3-5 candidates and up to 20 voters. I originally came up with this idea to solve a problem. My friends and I have a music listening group where we use ranked-choice voting to decide what album we will listen to together. I chose Svelte as the framework because of its small bundle size and fast load times. I used Vite as the bundler because of its speed and ease of use. I also used Tailwind for styling because of its utility-first approach.',
		technologies: 'Svelte, Vite, TypeScript, Tailwind',
		image: 'images/RCVC-display.png'
	},
	{
		name: 'Dinomite Designs',
		href: 'https://github.com/BrettEastman/Dinomite-Designs',
		url: 'https://github.com/BrettEastman/Dinomite-Designs',
		icon: 'fa-brands fa-pied-piper-hat',
		description:
			"Dinomite Designs is a Full Stack project where our team redesigned and optimized a retail website's product portal including details, Q&A, reviews and recommendations. I leveraged React context for simplified state management and component architecture. On the backend, I enhanced performance through SQL and JavaScript query optimizations, reducing HTTP durations by 25%. I implemented load balancing across multiple AWS EC2 instances with NGINX to achieve 12ms response time per query at 1000rps throughput with 0% errors. This project is an example of not only my frontend UX skills, but also my performance-focused approach to the backend, applying data caching, query optimizations, cloud scaling and load testing to significantly improve customer experience.",
		technologies:
			'Webpack, React, Node.js, PostgreSQL, AWS, Express, NGINX, Jest, K6, Loader.io, New Relic',
		image: 'images/Dinomite-display.png'
	}
];
