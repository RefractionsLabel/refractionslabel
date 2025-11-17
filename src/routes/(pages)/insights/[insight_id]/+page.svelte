<script lang="ts">
  import { format } from 'date-fns';
  const { data } = $props();
  const { title, author, date } = data.attributes;
  const { content } = data;
</script>

<div
  class="main-content relative flex w-full md:!pt-20 flex-col items-center justify-start bg-white p-6 text-primary lg:w-[86vw] lg:!p-12 lg:!px-20"
>
  <div class="flex w-full">
    <button
      class="flex items-center justify-start cursor-pointer rounded-none !text-xs !mb-6 md:!text-sm border !border-primary !bg-primary text-white hover:!bg-white hover:text-primary hover:!border-primary"
      onclick={() => (window.location.href = '/insights')}
      >← Back to insights</button
    >
  </div>

  <div
    class="flex w-full justify-center mt-4 mb-2 text-ml sm:mb-4 bg-[url('/WebBackgrounds/InsightsBackground.jpg')] bg-cover"
  >
    <div
      class="bg-white my-10 text-primary py-0 px-6 border-0 font-bold uppercase mix-blend-lighten w-fit"
    >
      <h1
        class="leading-none text-center py-4 !tracking-[1px] md:!py-0 !text-sm md:!text-md xl:!text-xl md:!tracking-[4px] font-variation"
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

  <div
    class="article mt-4 text-start w-full normal-case text-primary text-xs md:text-sm lg:text-ml min-h-86"
  >
    {@html content}
  </div>
</div>

<style>
  :global(.article p + p) {
    margin-top: 1.5rem;
  }
</style>

