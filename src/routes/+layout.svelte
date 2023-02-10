<main>
	<header>
		<a href="/">ArtiCol</a>
	</header>
	<slot/>
</main>

<style>
	:root {
		--color-bg: rgb(29, 20, 2);
		--color-text: rgb(243, 229, 203);
		--color-link: rgb(233, 190, 134);
	}

	:global(a) {
		color: var(--color-link);
	}

	a {
		color: var(--color-text);
		font-size: 24px;
		text-decoration: none;
		line-height: 2;
	}

	main {
		max-width: 800px;
		padding: 0 15px;
		margin: auto;
	}

	* {
		box-sizing: border-box;
	}

	:global(html) {
		background-color: var(--color-bg);
		color: var(--color-text);
		font-family: sans-serif;
	}
</style>