<main>
	<header>
		<a href="/">ArtiCol</a>
	</header>
	<div class="content">
		<slot />
	</div>
</main>

<style>
	:root {
		--color-bg: rgb(29, 20, 2);
		--color-text: rgb(243, 229, 203);
		--color-link: rgb(233, 190, 134);
		--color-highlight: rgb(223, 169, 99);
		--color-text-error: oklch(from var(--color-text) l 1 h);
	}

	:global {
		* {
			box-sizing: border-box;
		}

		html {
			background-color: var(--color-bg);
			color: var(--color-text);
			font-family: sans-serif;
		}

		body {
			margin: 0;
		}

		a {
			color: var(--color-link);
		}
	}

	header {
		display: flex;
		width: 100%;
		box-shadow: #0000004a 0px 3px 3px 1px;
	}

	a {
		display: inline-block;
		color: var(--color-text);
		font-size: 24px;
		text-decoration: none;
		line-height: 2;
		margin: auto;
	}

	.content {
		max-width: 800px;
		padding: 0 15px;
		margin: auto;
	}
</style>
