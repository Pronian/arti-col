import { addTransformations } from '@extractus/article-extractor';

const enum Node {
	TEXT_NODE = 3
}

addTransformations([
	{
		patterns: [/lifehacker\.com\//],
		pre: (document) => {
			for (const el of document.querySelectorAll('.instream-native-video--mobile')) {
				el.remove();
			}
			for (const el of document.querySelectorAll('[data-inset-url]')) {
				el.parentElement?.remove();
			}
			return document;
		},
		post: (document) => {
			return document;
		}
	},
	{
		patterns: [/http(s?):\/\/.+/],
		pre: (document) => {
			for (const el of document.querySelectorAll('figcaption, .disclaimer, .breadcrumb, [class*=newsletter], .author')) {
				el.remove();
			}
			return document;
		},
		post: (document) => {
			for (const els of document.all) {
				for (const node of els.childNodes) {
					if (node.nodeType === Node.TEXT_NODE && node.textContent) {
						node.textContent = node.textContent.replace(/\(\s*opens in (a )?new tab\s*\)/gi, '');
					}
				}
			}

			return document;
		}
	}
]);