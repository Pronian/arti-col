<p>Enter an link to an article to extract it to a separate page.</p>

<form action="/view" method="get">
	<input type="url" name="link" />
	<button>Extract</button>
</form>

<style>
	p {
		font-size: 20px;
	}

	input {
		border: 2px solid var(--color-highlight);
		border-radius: 5px;
		background-color: oklch(from var(--color-bg) 0.3 c h);
		font-size: 20px;
		color: var(--color-text);
		padding: 5px;
	}

	button {
		border: none;
		border-radius: 5px;
		background-color: oklch(from var(--color-highlight) 0.4 c h);
		font-size: 20px;
		color: var(--color-text);
		padding: 7px;
		cursor: pointer;
	}

	button:hover {
		background-color: oklch(from var(--color-highlight) 0.5 c h);
	}
</style>