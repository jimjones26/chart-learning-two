<script lang="ts">
  import type { PageData } from "./$types";
  import BarChart from "$lib/components/chart/BarChart.svelte";

  export let data: PageData;
</script>

<div class="container"><BarChart data={data.popData.default} /></div>

<style>
  :global(.chart) {
    width: 100%;
    min-width: 600px;
    max-width: 1200px;
  }

  .container {
    overflow-x: auto;
  }
</style>
