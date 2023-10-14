<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  console.log("Data: ", data.popData.default);
</script>

{JSON.stringify(data.popData.default)}
