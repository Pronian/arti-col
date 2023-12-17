import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { extract } from '@extractus/article-extractor';
import { getHeaders } from './fetchHeaders';
import './parserTransformations';

export const load = (async ({ url, fetch, request }) => {
	const linkStr = url.searchParams.get('link') || '';
	let link: URL;

	try {
		link = new URL(linkStr);
	} catch (err) {
		throw error(400, 'Invalid link URL!');
	}

	const agent = request.headers.get('User-Agent');

	const res = await fetch(link, {
		headers: getHeaders(agent || ''),
	}).catch((err: Error) => {
		throw error(400, `Encountered an error while fetching article: ${err.message}`);
	});

	if (!res.ok) {
		throw error(
			400,
			`This article can't be fetched at this time. Status code ${res.status}: ${res.statusText}`,
		);
	}

	const html = await res.text();
	const extractResult = await extract(html);

	return {
		article: extractResult,
	};
}) satisfies PageServerLoad;
