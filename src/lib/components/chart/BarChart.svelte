<script lang="ts">
  import * as d3 from "d3";
  export let data: any;

  const width = 800;
  const height = 600;

  const margin = { top: 20, right: 20, bottom: 20, left: 180 };
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  $: xDomain = data.map((d: { country: any }) => d.country);
  $: yDomain = data.map((d: { population: string | number }) => +d.population);

  $: yScale = d3
    .scaleBand()
    .domain(xDomain)
    .range([0, innerHeight])
    .padding(0.1);
  $: xScale = d3
    .scaleLinear()
    .domain([0, Math.max.apply(null, yDomain)])
    .range([0, innerWidth]);
</script>

<svg viewBox={`0 0 ${width} ${height}`}>
  <g transform={`translate(${margin.left},${margin.top})`}>
    {#each xScale.ticks() as tickValue}
      <g transform={`translate(${xScale(tickValue)},0)`}>
        <line y2={innerHeight} stroke="black" />
        <text text-anchor="middle" dy=".71em" y={innerHeight + 3}>
          {tickValue}
        </text>
      </g>
    {/each}
    {#each data as d}
      <text
        text-anchor="end"
        x="-3"
        dy=".32em"
        y={yScale(d.country) + yScale.bandwidth() / 2}
      >
        {d.country}
      </text>
      <rect
        x="0"
        y={yScale(d.country)}
        width={xScale(d.population)}
        height={yScale.bandwidth()}
      />
    {/each}
  </g>
</svg>
