<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const article = data.article;
</script>

<svelte:head>
	{#if article}
		<title>{article.title || 'View article'} | ArtiCol</title>
	{/if}
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
	{/if}
</article>

<style>
	article :global(img) {
		width: 100%;
	}

	.article-meta {
		display: flex;
		justify-content: space-between;
	}
</style>
