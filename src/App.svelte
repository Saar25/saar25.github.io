<script lang="ts">
	import { fly } from "svelte/transition";
	import CardsGroup from "./components/CardsGroup.svelte";
	import { Card } from "./types";

	const cards: Card[] = [
		{ path: "assets/logos/angular.png", title: "Angular" },
		{ path: "assets/logos/nodejs.png", title: "NodeJs" },
		{ path: "assets/logos/java.png", title: "Java" },
		{ path: "assets/logos/kotlin.svg", title: "Kotlin" },
		{ path: "assets/logos/ts.png", title: "Typescript" },
		{ path: "assets/logos/sql.png", title: "SQL" },
		{ path: "assets/logos/react.png", title: "React" },
		{ path: "assets/logos/git.png", title: "Git" },
		{ path: "assets/logos/nestjs.svg", title: "NestJs" },
		{ path: "assets/logos/scss.png", title: "Scss" },
		{ path: "assets/logos/lwjgl.svg", title: "Lwjgl" },
		{ path: "assets/logos/blender.svg", title: "Blender" },
	];

	const backgrounds: string[] = [
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
		<CardsGroup {cards} />
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
		padding: 50px 25% 0;
	}

	.content-section-title {
		font-size: 24px;
		font-weight: bold;
	}

	.content-section-body {
		font-size: 24px;
	}
</style>
