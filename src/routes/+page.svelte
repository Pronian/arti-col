<script lang="ts">
	import { goto } from '$app/navigation';
	import lz from 'lz-string';

	let text = '';

	function openLink(event: MouseEvent) {
		event.preventDefault();
		const compressed = lz.compressToBase64(text);
		const url = new URL('/view', window.location.origin);
		url.searchParams.set('text', compressed);
		goto(url);
	}
</script>

<div class="cont">
	<p>Enter an link to an article to extract it to a separate page.</p>

	<form action="/view" method="get">
		<input type="url" name="link" />
		<button>Extract</button>
	</form>

	<p>Or paste text to get it as a link and open it.</p>
	<form>
		<textarea bind:value={text}></textarea>
		<button on:click={openLink}>Open link</button>
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

		button {
			align-self: flex-end;
		}
	}

	input,
	textarea {
		border: 2px solid var(--color-highlight);
		border-radius: 5px;
		background-color: oklch(from var(--color-bg) 0.3 c h);
		font-size: 20px;
		color: var(--color-text);
		padding: 5px;
		flex-grow: 1;
	}

	textarea {
		font-size: 16px;
		height: 300px;
		resize: vertical;
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
