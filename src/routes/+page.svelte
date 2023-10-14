<script lang="ts">
  import type { PageData } from "./$types";
  import BarChart from "$lib/components/chart/BarChart.svelte";

  export let data: PageData;
  console.log("Data: ", data.popData.default);
</script>

<BarChart {data} />
