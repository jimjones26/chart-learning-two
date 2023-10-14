<script lang="ts">
  import type { PageData } from "./$types";
  import BarChart from "$lib/components/chart/BarChart.svelte";

  export let data: PageData;
</script>

<BarChart data={data.popData.default} />
