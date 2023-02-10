import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { extract } from '@extractus/article-extractor';
import './parserTransformations';

export const load = (async ({ url, fetch }) => {
	const linkStr = url.searchParams.get('link') || '';
	let link: URL;

	try {
		link = new URL(linkStr);
	} catch (err) {
		throw error(400, 'Invalid link URL!');
	}

	const res = await fetch(link, {
		headers: {
			'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
		}
	});

	if (!res.ok) {
		throw error(
			400,
			`This article can't be fetched at this time. Status code ${res.status}: ${res.statusText}`
		);
	}

	const html = await res.text();
	const extractResult = await extract(html);

	return {
		article: extractResult
	};
}) satisfies PageServerLoad;
