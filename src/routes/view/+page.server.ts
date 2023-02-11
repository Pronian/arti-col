import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { extract } from '@extractus/article-extractor';
import { getHeaders } from './fetchHeaders';
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
		headers: getHeaders(),
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
