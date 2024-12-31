<script lang="ts">
	import { goto } from '$app/navigation';
	import { debouncedState } from '$lib/state/debounced.svelte';
	import lz from 'lz-string';

	let inputUrl = $state('');

	const maxTextLength = 3_600;

	let text = debouncedState('', 500);

	const compressedText = $derived(lz.compressToBase64(text.value));
	const textTooLong = $derived(compressedText.length > maxTextLength);

	function openLink(event: MouseEvent) {
		event.preventDefault();
		if (textTooLong) return;

		const url = new URL('/view', window.location.origin);
		url.searchParams.set('text', compressedText);
		goto(url);
	}
</script>

<div class="cont">
	<p>Enter an link to an article to extract it to a separate page.</p>

	<form action="/view" method="get">
		<input type="url" name="link" bind:value={inputUrl} />
		<button disabled={!inputUrl}>Extract</button>
	</form>

	<p>
		Or paste text to get it as a link and open it.
		{#if text.value.length > 0}
			<span class="count" class:error={textTooLong}>
				{compressedText.length}/{maxTextLength}
			</span>
		{/if}
	</p>

	<form>
		<textarea
			value={text.value}
			oninput={(e) => (text.value = (e.target as HTMLTextAreaElement).value)}
		></textarea>
		<button onclick={openLink} disabled={!text.value || textTooLong}>Open link</button>
	</form>
</div>

<style>
	.cont {
		container-type: inline-size;
	}

	p {
		font-size: 20px;
	}

	.count {
		opacity: 0.5;
		font-weight: lighter;

		&.error {
			color: var(--color-text-error);
			font-weight: normal;
		}
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

		&:hover {
			background-color: oklch(from var(--color-highlight) 0.5 c h);
		}

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
	}
</style>
