<script lang="ts">
	import { fly } from "svelte/transition";
	import Card from "./components/Card.svelte";

	const cards = [
		{ path: "assets/logos/angular-logo.png", title: "Angular" },
		{ path: "assets/logos/nodejs-logo.png", title: "NodeJs" },
		{ path: "assets/logos/java-logo.png", title: "Java" },
		{ path: "assets/logos/kotlin-logo.svg", title: "Kotlin" },
		{ path: "assets/logos/ts-logo.png", title: "Typescript" },
		{ path: "assets/logos/sql-logo.png", title: "SQL" },
		{ path: "assets/logos/react-logo.png", title: "React" },
		{ path: "assets/logos/git-logo.png", title: "Git" },
		{ path: "assets/logos/nestjs-logo.svg", title: "NestJs" },
		{ path: "assets/logos/scss-logo.png", title: "Scss" },
		{ path: "assets/logos/lwjgl-logo.svg", title: "Lwjgl" },
		{ path: "assets/logos/blender-logo.svg", title: "Blender" },
	];

	const backgrounds = [
		"https://raw.githubusercontent.com/Saar25/Lwjgl/master/docs/Amanecer.png",
		"assets/backgrounds/ParticlesSphere.png",
	];

	let backgroundIndex = 0;

	let timeout: NodeJS.Timeout;

	const incBackgroundIndex = () => {
		clearTimeout(timeout);

		backgroundIndex = (backgroundIndex + 1) % backgrounds.length;

		timeout = setTimeout(incBackgroundIndex, 5000);
	};

	timeout = setTimeout(incBackgroundIndex, 5000);
</script>

<header class="header">
	{#each backgrounds as background, i}
		{#if backgroundIndex == i}
			<img
				class="header-image"
				src={background}
				alt="background"
				in:fly={{ x: 1000, opacity: 0, duration: 2000 }}
				out:fly={{ x: -1000, opacity: 0, duration: 2000 }}
				on:click={incBackgroundIndex}
			/>
		{/if}
	{/each}
	<article class="header-content">
		<h1 class="header-title">Saar25 Github Website</h1>
		<sub class="header-sub-title">This is me</sub>
	</article>
</header>

<main class="main">
	<section class="about-me content-section">
		<span class="content-section-title">About me</span>
		<section class="content-section-body">
			<p>
				I am a full stack web developer, with experience in sprint-boot,
				nodejs, angular and vue.
			</p>
			<p>
				I like using Opengl and Lwjgl as a hobby, I have created 2
				engines using Lwjgl, the most recent one is still under
				development.
			</p>
		</section>
	</section>

	<section class="skills content-section">
		<span class="content-section-title">My Skills</span>
		<section class="skills-body content-section-body">
			{#each cards as card}
				<Card {card} />
			{/each}
		</section>
	</section>
</main>

<style>
	.header {
		width: 100%;
		height: 65vh;

		display: flex;
		align-items: center;
		justify-content: center;

		position: relative;
		overflow: hidden;
	}

	.header-image {
		position: absolute;
		overflow: hidden;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.header-content {
		background-color: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(5px);
		box-shadow: 0 0 10px 0 black;

		padding: 20px 50px;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.header-title {
		font-size: 48px;
		font-weight: bold;
		margin: 10px 0;
	}

	.header-sub-title {
		font-size: 32px;
	}

	.main {
		display: flex;
		flex-direction: column;
		padding-top: 20px;

		box-shadow: 0 22px 15px -15px black inset;
	}

	.content-section {
		padding: 50px 25%;
	}

	.content-section-title {
		font-size: 24px;
		font-weight: bold;
	}

	.content-section-body {
		font-size: 24px;
	}

	.skills-body {
		display: grid;
		grid-template-columns: repeat(5, 20%);
		grid-row-gap: 10px;
		justify-content: center;
	}
</style>
