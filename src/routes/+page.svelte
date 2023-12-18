<div class="cont">
	<p>Enter an link to an article to extract it to a separate page.</p>
	
	<form action="/view" method="get">
		<input type="url" name="link" />
		<button>Extract</button>
	</form>
</div>

<style>
	.cont {
		container-type: inline-size;
	}

	p {
		font-size: 20px;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	@container (min-width: 500px) {
		form {
			flex-direction: row;
		}
	}

	input {
		border: 2px solid var(--color-highlight);
		border-radius: 5px;
		background-color: oklch(from var(--color-bg) 0.3 c h);
		font-size: 20px;
		color: var(--color-text);
		padding: 5px;
		flex-grow: 1;
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
