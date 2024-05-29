export default [
	{
		name: 'Project Compass',
		href: 'https://github.com/sfbrigade/compass',
		icon: 'fa-regular fa-compass',
		description:
			"As a volunteer Full Stack Software Engineer at SF Civic Tech, I am on a team of developers and designers, currently working on Project Compass, which is a web application to streamline the process of setting and recording Individual Educational Plan (IEP) data for students with disabilities, for the San Francisco Unified School District (SFUSD). I was responsible for implementing a feature to the project, using Nodemailer, to automatically send confirmation emails to new para-professionals as they are added to the database by the teacher. I also engineered the design team's designs for the Student page and Staff page, implementing the backend procedures to allow teachers to add/edit/remove students and paras.",
		technologies: 'Next.js, TRPC, Typescript, Postgres, Keysely, Zod, Figma, MaterialUI, Ava',
		image: 'images/ProjectCompass-display.png'
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
		name: 'Ranked Choice',
		href: 'https://github.com/BrettEastman/RankedChoice',
		icon: 'fa-solid fa-check-to-slot',
		description:
			'The Ranked Choice Voting Calculator is a single page web application designed to facilitate the tally of a ranked choice vote involving 3-5 candidates and up to 20 voters. I originally came up with this idea to solve a problem. My friends and I have a music listening group where we use ranked-choice voting to decide what album we will listen to together. I chose Svelte as the framework because of its small bundle size and fast load times. I used Vite as the bundler because of its speed and ease of use. I also used Tailwind for styling because of its utility-first approach.',
		technologies: 'Svelte, Vite, TypeScript, Tailwind',
		image: 'images/RCVC-display.png'
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
