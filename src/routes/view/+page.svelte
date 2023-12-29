<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import lz from 'lz-string';

	export let data: PageData;

	const article = data.article;
	let text = '';
	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		const encodedText = params.get('text');
		if (encodedText) {
			text = lz.decompressFromBase64(encodedText);
		}
	});
</script>

<svelte:head>
	{#if article}
		<title>{article.title || 'View article'} | ArtiCol</title>
		{#if article.title}
			<meta property="og:title" content={article.title} />
			<meta property="article:title" content={article.title} />
		{/if}
		{#if article.image}
			<meta property="og:image" content={article.image} />
		{/if}
		{#if article.author}
			<meta property="article:author" content={article.author} />
		{/if}
		{#if article.published}
			<meta property="article:published_time" content={article.published} />
		{/if}
	{/if}
	<meta property="og:type" content="article" />
</svelte:head>

<article>
	{#if article}
		{#if article.title}
			<h1>{article.title}</h1>
		{/if}
		<div class="article-meta">
			{#if article.author}
				<div>By <span>{article.author.replace('@', '')}</span></div>
			{/if}
			{#if article.published}
				<div>Published on <span>{new Date(article.published).toLocaleDateString()}</span></div>
			{/if}
		</div>
		{@html article.content}
	{:else if text}
		<div class="text">
			{@html text}
		</div>
	{/if}
</article>

<style>
	article {
		margin-top: 25px;
	}

	article :global(img) {
		width: 100%;
	}

	.article-meta {
		display: flex;
		justify-content: space-between;
	}

	.text {
		white-space: pre-wrap;
	}
</style>
