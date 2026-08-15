// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import starlightImageZoom from 'starlight-image-zoom';

export default defineConfig({
	site: 'https://docs.rev23.com',
	base: '/rev23-desktop-docs',
	integrations: [
		starlight({
			plugins: [starlightImageZoom()],
			title: 'REV23 Desktop Docs',
			logo: {
				light: './src/assets/rev23-wordmark-light.svg',
				dark: './src/assets/rev23-wordmark-dark.svg',
				replacesTitle: true,
				alt: 'REV23',
			},
			favicon: '/favicon.ico',
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'apple-touch-icon',
						href: '/rev23-desktop-docs/apple-touch-icon.png',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://docs.rev23.com/rev23-desktop-docs/app-icon.png',
					},
				},
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Organization',
						name: 'REV23',
						url: 'https://www.rev23.com',
						logo: 'https://docs.rev23.com/rev23-desktop-docs/app-icon.png',
						sameAs: [
							'https://instagram.com/rev23dev',
							'https://facebook.com/rev23dev',
						],
					}),
				},
			],
			social: [
				{ icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/rev23dev' },
				{ icon: 'facebook', label: 'Facebook', href: 'https://facebook.com/rev23dev' },
			],
			sidebar: [
				{ label: 'Home', slug: '' },
				{ label: 'Introduction', slug: 'introduction' },
				{ label: 'Installation', autogenerate: { directory: 'installation' } },
				{ label: 'User Interface', autogenerate: { directory: 'ui' } },
				{ label: 'Quick Start', autogenerate: { directory: 'quick-start' } },
				{ label: 'Quick Start Vol. 2', autogenerate: { directory: 'quick-start-2' } },
				{ label: 'Concepts', autogenerate: { directory: 'concepts' } },
				{ label: 'Server Concepts', autogenerate: { directory: 'server-concepts' } },
				{ label: 'Connection Concepts', autogenerate: { directory: 'connection-concepts' } },
				{ label: 'Security Concepts', autogenerate: { directory: 'security-concepts' } },
				{ label: 'Configuration', autogenerate: { directory: 'configuration' } },
				{ label: 'Inventory', autogenerate: { directory: 'inventory' } },
				{ label: 'Hardware', autogenerate: { directory: 'hardware' } },
				{ label: 'Troubleshooting', autogenerate: { directory: 'troubleshooting' } },
				{ label: 'Task Based Help', autogenerate: { directory: 'how-to' } },
				{ label: 'Reference', autogenerate: { directory: 'reference' } },
				{ label: 'Tattoo Management Studio', slug: 'tattoo-management-studio' },
				{
					label: 'About',
					items: [
						{ label: 'License', slug: 'license' },
						{ label: 'Release Notes', slug: 'release-notes' },
					],
				},
			],
			components: {
				SiteTitle: './src/components/SiteTitle.astro',
			},
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
