<main>
	<header>
		<a href="/">ArtiCol</a>
	</header>
	<slot/>
</main>

<style>
	a {
		color: rgb(243, 229, 203);
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
		background-color: rgb(29, 20, 2);
		color: rgb(243, 229, 203);
		font-family: sans-serif;
	}
</style>