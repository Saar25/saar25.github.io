<script lang="ts">
	import Card from "./components/Card.svelte";

	const cards = [
		{ path: "public/assets/angular-logo.png", title: "Angular" },
		{ path: "public/assets/nodejs-logo.png", title: "NodeJs" },
		{ path: "public/assets/java-logo.png", title: "Java" },
		{ path: "public/assets/kotlin-logo.svg", title: "Kotlin" },
		{ path: "public/assets/ts-logo.png", title: "Typescript" },
		{ path: "public/assets/sql-logo.png", title: "SQL" },
		{ path: "public/assets/react-logo.png", title: "React" },
		{ path: "public/assets/git-logo.png", title: "Git" },
		{ path: "public/assets/nestjs-logo.svg", title: "NestJs" },
		{ path: "public/assets/scss-logo.png", title: "Scss" },
		{ path: "public/assets/lwjgl-logo.svg", title: "Lwjgl" },
		{ path: "public/assets/blender-logo.svg", title: "Blender" },
	];
</script>

<header class="header">
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
		background-image: url("https://raw.githubusercontent.com/Saar25/Lwjgl/master/docs/Amanecer.png");
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;

		box-shadow: black 0 0 15px;

		display: flex;
		align-items: center;
		justify-content: center;
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
		margin: 30px 0;
		display: flex;
		flex-direction: column;
	}

	.content-section {
		margin: 20px 20%;
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
