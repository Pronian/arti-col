<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.article.title || 'View article'} | ArtiCol</title>
</svelte:head>

<article>
	{#if data.article.title}
		<h1>{data.article.title}</h1>
	{/if}
	<div class="article-meta">
		{#if data.article.author}
			<div>By <span>{data.article.author.replace('@', '')}</span></div>
		{/if}
		{#if data.article.published}
			<div>Published on <span>{new Date(data.article.published).toLocaleDateString()}</span></div>
		{/if}
	</div>
	{@html data.article.content}
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