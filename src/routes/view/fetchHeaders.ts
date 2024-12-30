const chromeVersion = '130.0.0.0';
const safariVersion = '537.36';

function getRandomItem<T>(array: T[]): T {
	return array[Math.floor(Math.random() * array.length)];
}

const agents = [
	`Mozilla/5.0 (Linux; Android 9; LG G6) AppleWebKit/${safariVersion} (KHTML, like Gecko) Chrome/${chromeVersion} Mobile Safari/${safariVersion}`,
	`Mozilla/5.0 (Linux; Android 11; POCO X3 Pro) AppleWebKit/${safariVersion} (KHTML, like Gecko) Chrome/${chromeVersion} Mobile Safari/${safariVersion}`,
	`Mozilla/5.0 (Linux; Android 12; Pixel 4) AppleWebKit/${safariVersion} (KHTML, like Gecko) Chrome/${chromeVersion} Mobile Safari/${safariVersion}`,
	`Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/${safariVersion} (KHTML, like Gecko) Chrome/${chromeVersion} Mobile Safari/${safariVersion}`,
	`Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/${safariVersion} (KHTML, like Gecko) Chrome/${chromeVersion} Safari/${safariVersion}`,
	`Mozilla/5.0 (Windows NT 11.0; WOW64) AppleWebKit/${safariVersion} (KHTML, like Gecko) Chrome/${chromeVersion} Safari/${safariVersion}`,
];

const referers = [
	'https://www.google.com/',
	'https://www.google.co.uk/',
	'https://www.google.com.au/',
	'https://www.google.de/',
	'https://www.bing.com/',
	'https://www.reddit.com/',
	'https://www.facebook.com/',
	'https://www.twitter.com/',
	'https://www.instagram.com/',
	'https://www.pinterest.com/',
	'https://www.tumblr.com/',
	'https://www.linkedin.com/',
	'https://www.twitch.tv/',
];

const languages = [
	'en-US,en-GB,en;q=0.9,en;q=0.8;q=0.7',
	'en-US,en-GB;q=0.9,en;q=0.8;q=0.7',
	'en-US,en;q=0.9,en;q=0.8;q=0.7',
	'en-US,en;q=0.9',
];

export function getHeaders(originalUserAgent = '') {
	return {
		Accept:
			'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
		'Accept-Encoding': 'gzip, deflate, br',
		'Accept-Language': getRandomItem(languages),
		'Cache-Control': 'no-cache',
		'User-Agent': originalUserAgent || getRandomItem(agents),
		Referer: getRandomItem(referers),
	};
}
