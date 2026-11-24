/**
 * The Store lists two kinds of item:
 * - store-only products (merch etc.) from the "Store" CMS collection, and
 * - releases with "Show in Store" ticked, e.g. a vinyl record that is also a release.
 *
 * Both are mapped to the release front-matter shape so ReleaseDetail can render either.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Attributes = Record<string, any>;
type MarkdownModule = { attributes: Attributes };

export type StoreItem = {
	slug: string;
	attributes: Attributes;
};

const productFiles = import.meta.glob<MarkdownModule>('$lib/_content/store/*.md', { eager: true });
const releaseFiles = import.meta.glob<MarkdownModule>('$lib/_content/releases/*.md', {
	eager: true
});

const slugOf = (path: string) => path.split('/').at(-1)?.replace(/\.md$/, '') ?? '';

const fromProduct = (a: Attributes): Attributes => ({
	...a,
	artist: a.subtitle ?? '',
	cover_art: a.image,
	image_alt: a.title,
	buy_label: String(a.buy_label ?? '').trim() || 'Buy now',
	hide_date: true
});

export function getStoreItems(): StoreItem[] {
	const products = Object.entries(productFiles).map(([path, mod]) => ({
		slug: slugOf(path),
		attributes: fromProduct(mod.attributes)
	}));

	const releases = Object.entries(releaseFiles)
		.filter(([, mod]) => mod.attributes.in_store === true)
		.map(([path, mod]) => ({ slug: slugOf(path), attributes: mod.attributes }));

	// Products come first so one wins if it ever shares a slug with a release.
	return [...products, ...releases].sort(
		(a, b) => new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime()
	);
}

export function getStoreItem(slug: string): StoreItem | undefined {
	return getStoreItems().find((item) => item.slug === slug);
}
