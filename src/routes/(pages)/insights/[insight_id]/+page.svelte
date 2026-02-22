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

	/* Consistent vertical spacing between ALL blocks in the article */
	:global(.article > * + *) {
		margin-top: 1.5rem;
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
		font-size: var(--text-lg);
		margin: 0;
	}

	/* Keep bold text same size as surrounding text */
	:global(.article strong) {
		font-weight: 700;
		font-size: inherit !important;
	}

	/* Links in article */
	:global(.article a) {
		text-decoration: underline;
		color: inherit;
	}
</style>
