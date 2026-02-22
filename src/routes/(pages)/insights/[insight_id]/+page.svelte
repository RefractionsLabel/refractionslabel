<script lang="ts">
	import { format } from 'date-fns';
	import { marked } from 'marked';

	const { data } = $props();
	const { title, author, date } = data.attributes;

	// Decap CMS stores markdown in `data.content` → convert to HTML
	const content = marked.parse(data.content);
</script>

<div
	class="main-content relative flex w-full md:!pt-20 flex-col items-center justify-start bg-white p-6 text-primary lg:w-[86vw] lg:!p-12 lg:!px-20"
>
	<div class="flex w-full">
		<button
			class="flex items-center justify-start cursor-pointer rounded-none !text-xs !mb-6 md:!text-sm border !border-primary !bg-primary text-white hover:!bg-white hover:text-primary hover:!border-primary"
			onclick={() => (window.location.href = '/insights')}>← Back to insights</button
		>
	</div>

	<div
		class="flex w-full justify-center mt-4 mb-2 text-ml sm:mb-4 bg-[url('/WebBackgrounds/InsightsBackground.jpg')] bg-cover"
	>
		<div
			class="bg-white my-10 text-primary py-0 px-6 border-0 font-bold uppercase mix-blend-lighten w-fit max-w-3xl"
		>
			<h1
				class="leading-none text-center py-4 !tracking-[1px] md:!py-0 text-md xl:!text-xl md:!tracking-[4px] font-variation"
			>
				{title}
			</h1>
		</div>
	</div>

	<div
		class="mt-4 flex w-full flex-col items-start gap-1 text-sm text-black
           lg:flex-row lg:items-center lg:justify-between lg:gap-0"
	>
		<p class="author !text-xs md:!text-sm xl:!text-ml">{author}</p>
		<p class="date !text-xs md:!text-sm xl:!text-ml">
			{format(new Date(date), 'd MMMM yyyy')}
		</p>
	</div>

	<div class="article mt-4 text-start w-full normal-case text-primary min-h-86">
		{@html content}
	</div>
</div>

<style>
	/* Apply app.css design system to article content */

	/* Paragraphs & list items: body text size and line height */
	:global(.article p),
	:global(.article li) {
		font-size: 1.2rem !important;
		line-height: 1.65 !important;
		font-variation-settings:
			'wght' 400,
			'wdth' 100;
	}

	/* List items: use same list styling as app.css (list-disc list-inside) */
	:global(.article ul) {
		list-style-type: disc;
		list-style-position: inside;
		padding-left: 1.5rem;
		margin-left: 0;
		margin-top: 0;
		margin-bottom: 0;
	}
	:global(.article ol) {
		list-style-type: decimal;
		list-style-position: inside;
		padding-left: 1.5rem;
		margin-left: 0;
		margin-top: 0;
		margin-bottom: 0;
	}
	:global(.article li) {
		list-style-type: inherit;
		list-style-position: inherit;
	}
	/* Nested lists: left margin offsets the block; padding for bullet space */
	:global(.article ul ul),
	:global(.article ol ul) {
		margin-top: 0.25rem;
		margin-bottom: 0;
		margin-left: 1.5rem;
		padding-left: 2rem;
		list-style-type: circle;
		list-style-position: inside;
	}
	:global(.article ul ul ul),
	:global(.article ol ul ul),
	:global(.article ol ol ul) {
		list-style-type: square;
		margin-left: 1.5rem;
		padding-left: 2rem;
	}
	:global(.article ol ol),
	:global(.article ul ol) {
		margin-top: 0.25rem;
		margin-bottom: 0;
		margin-left: 1.5rem;
		padding-left: 2rem;
		list-style-type: lower-alpha;
		list-style-position: inside;
	}
	:global(.article ol ol ol),
	:global(.article ul ol ol) {
		list-style-type: lower-roman;
		margin-left: 1.5rem;
		padding-left: 2rem;
	}

	/* Consistent vertical spacing between ALL blocks in the article */
	:global(.article > * + *) {
		margin-top: 1.5rem;
	}
	:global(.article li ul li) {
		margin-left: 24px;
	}

	/* Headings in article: align with app.css h1/h2/h3 */
	:global(.article h1) {
		font-size: var(--text-l);
		margin: 0;
		letter-spacing: 0.4rem;
	}
	@media (min-width: 768px) {
		:global(.article h1) {
			font-size: var(--text-lg);
		}
	}
	@media (min-width: 1024px) {
		:global(.article h1) {
			font-size: var(--text-xxxl);
		}
	}
	:global(.article h2) {
		font-size: var(--text-l);
		margin: 0;
	}
	@media (min-width: 768px) {
		:global(.article h2) {
			font-size: var(--text-lg);
		}
	}
	:global(.article h3) {
		font-size: var(--text-l);
		margin: 0;
	}
	:global(.article h4) {
		font-size: var(--text-ml);
		margin: 0;
	}
	:global(.article h5) {
		font-size: var(--text-sm);
		margin: 0;
	}
	:global(.article h6) {
		font-size: var(--text-xs);
		margin: 0;
	}

	/* Bold: variable font wght axis */
	:global(.article strong) {
		font-weight: 700;
		font-variation-settings:
			'wght' 700,
			'wdth' 100;
		font-size: inherit !important;
	}
	/* Italic */
	:global(.article em) {
		font-style: italic;
		font-size: inherit !important;
	}
	/* Strikethrough (GFM) */
	:global(.article del) {
		text-decoration: line-through;
		font-size: inherit !important;
	}
	/* Underline (HTML) */
	:global(.article u) {
		text-decoration: underline;
		font-size: inherit !important;
	}
	/* Superscript / subscript */
	:global(.article sup),
	:global(.article sub) {
		font-size: 0.75em;
		line-height: 0;
		vertical-align: baseline;
	}
	:global(.article sup) {
		vertical-align: super;
	}
	:global(.article sub) {
		vertical-align: sub;
	}

	/* Blockquote */
	:global(.article blockquote) {
		margin: 1rem 0;
		padding-left: 1.5rem;
		border-left: 4px solid rgb(3, 24, 3);
		opacity: 0.95;
		font-size: inherit !important;
	}
	:global(.article blockquote p) {
		margin: 0.25rem 0;
	}

	/* Inline code */
	:global(.article code) {
		font-family: ui-monospace, monospace;
		font-size: 0.9em;
		padding: 0.2em 0.4em;
		background: rgb(0 0 0 / 0.06);
		border-radius: 4px;
	}
	/* Code block (pre > code) */
	:global(.article pre) {
		margin: 1rem 0;
		padding: 1rem 1.25rem;
		background: rgb(0 0 0 / 0.06);
		border-radius: 4px;
		overflow-x: auto;
	}
	:global(.article pre code) {
		padding: 0;
		background: none;
		font-size: 0.85rem;
		line-height: 1.5;
	}

	/* Tables */
	:global(.article table) {
		width: 100%;
		margin: 1rem 0;
		border-collapse: collapse;
		font-size: 1rem;
	}
	:global(.article th),
	:global(.article td) {
		padding: 0.5rem 0.75rem;
		border: 1px solid rgb(0 0 0 / 0.15);
		text-align: left;
	}
	:global(.article th) {
		font-weight: 700;
		font-variation-settings:
			'wght' 700,
			'wdth' 100;
		background: rgb(0 0 0 / 0.05);
	}

	/* Horizontal rule */
	:global(.article hr) {
		margin: 1.5rem 0;
		border: none;
		border-top: 2px solid rgb(0 0 0 / 0.2);
	}

	/* Task list (GFM): li contains <input type="checkbox"> + text */
	:global(.article input[type='checkbox']) {
		margin: 0 0.5rem 0 0;
		vertical-align: middle;
	}
	:global(.article li:has(input[type='checkbox'])) {
		list-style: none;
	}

	/* Images */
	:global(.article img) {
		max-width: 100%;
		height: auto;
		vertical-align: middle;
	}

	/* Links */
	:global(.article a) {
		text-decoration: underline;
		color: inherit;
	}
</style>
