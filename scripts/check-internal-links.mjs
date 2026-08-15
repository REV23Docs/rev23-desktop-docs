import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const outputRoot = path.join(projectRoot, 'dist');
const siteBase = '/rev23-desktop-docs';
const missing = new Set();
let checkedLinks = 0;

function filesIn(directory) {
	return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
		const entryPath = path.join(directory, entry.name);
		return entry.isDirectory() ? filesIn(entryPath) : [entryPath];
	});
}

function outputPathFor(pathname) {
	const relativePath = pathname.slice(siteBase.length).replace(/^\//, '');
	if (!relativePath) return path.join(outputRoot, 'index.html');
	if (pathname.endsWith('/')) return path.join(outputRoot, relativePath, 'index.html');

	const directPath = path.join(outputRoot, relativePath);
	if (fs.existsSync(directPath)) return directPath;
	return path.join(outputRoot, relativePath, 'index.html');
}

for (const htmlPath of filesIn(outputRoot).filter((filePath) => filePath.endsWith('.html'))) {
	const relativeHtmlPath = path.relative(outputRoot, htmlPath).replaceAll(path.sep, '/');
	const route =
		relativeHtmlPath === 'index.html'
			? `${siteBase}/`
			: `${siteBase}/${relativeHtmlPath.replace(/index\.html$/, '')}`;
	const html = fs.readFileSync(htmlPath, 'utf8');

	for (const match of html.matchAll(/href="([^"]+)"/g)) {
		const href = match[1].replaceAll('&amp;', '&');
		if (href === '#_top' || /^(?:https?:|mailto:|tel:|javascript:|data:|\/\/)/i.test(href)) {
			continue;
		}

		const url = new URL(href, `https://local.test${route}`);
		if (!url.pathname.startsWith(`${siteBase}/`) && url.pathname !== siteBase) continue;

		checkedLinks += 1;
		const destinationPath = outputPathFor(url.pathname);
		if (!fs.existsSync(destinationPath)) {
			missing.add(`${relativeHtmlPath}: ${href}`);
			continue;
		}

		if (url.hash && destinationPath.endsWith('.html')) {
			const fragment = decodeURIComponent(url.hash.slice(1));
			const destinationHtml =
				destinationPath === htmlPath ? html : fs.readFileSync(destinationPath, 'utf8');
			if (!destinationHtml.includes(`id="${fragment}"`)) {
				missing.add(`${relativeHtmlPath}: ${href} (missing heading)`);
			}
		}
	}
}

if (missing.size > 0) {
	console.error('Broken internal links:');
	for (const item of [...missing].sort()) console.error(`- ${item}`);
	process.exit(1);
}

console.log(`Checked ${checkedLinks} internal links.`);
