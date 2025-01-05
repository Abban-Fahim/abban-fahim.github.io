<script lang="ts" client:only>
	// import { Anchor, Background, Node, Svelvet, Controls } from "svelvet";
	// import GraphNode from "./GraphNode.svelte";
	// import { skills, main } from "./data";
	import { onMount } from "svelte";
	// import ForceGraph3D from "3d-force-graph";
	import * as d3 from "d3";

	import { connections } from "./data";

	let el;

	let data = {nodes: [], links: []};
	connections.forEach((c) => {
		let split = c.split("->");
		if (split.length > 1) {
			let newLink = {source: split[0], target: split[1], value: 4};
			data.links.push(newLink);
		} else {
			split = c.split(",");
			let newNode = {id: split[0], label: split[1]};
			data.nodes.push(newNode);
		}
	})
	
	// onMount(()=>{
	// 	const Graph = new ForceGraph3D(el).graphData(data);
	// });
	
	// From https://observablehq.com/@d3/force-directed-graph/2
	function drawGraph() {
		console.log("redrawing graph...")
		d3.select(el).html(null);
		// Specify the dimensions of the chart.
		const width = document.body.clientWidth;
		const height = Math.exp(-0.00005 * width) * 850;

		// Specify the color scale.
		const color = d3.scaleOrdinal(d3.schemeCategory10);

		// The force simulation mutates links and nodes, so create a copy
		// so that re-evaluating this cell produces the same result.
		const links = data.links.map(d => ({...d}));
		const nodes = data.nodes.map(d => ({...d}));

		console.log("links", links);
		console.log("nodes", nodes);

		// Create a simulation with several forces.
		const simulation = d3.forceSimulation(nodes)
			.force("link", d3.forceLink(links).id(d => d.id).strength(()=>0.01))
			.force("charge", d3.forceManyBody())
			.force("center", d3.forceCenter(width / 2, height / 2).strength(0.01))
			.on("tick", ticked);

		// Create the SVG container.
		const svg = d3.create("svg")
			.attr("width", width)
			.attr("height", height)
			.attr("viewBox", [0, 0, width, height])
			.attr("style", "max-width: 100%; height: auto;");

		// Add a line for each link, and a circle for each node.
		const link = svg.append("g")
			.attr("class", "graph_edge")
			.selectAll("line")
    		.data(links)
    		.join("line")

		const node = svg.append("g")
			.attr("class", "graph_node")
			.selectAll()
			.data(nodes)
			.join("circle")
			.attr("r", 20)

		node.append("title")
			.text(d => d.label);

		const text = svg.selectAll()
			.data(simulation.nodes())
			.enter().append("g")
			.append("text")
			.attr("class", "graph_label")
			.text(d => d.label);

		// Add a drag behavior.
		node.call(d3.drag()
				.on("start", dragstarted)
				.on("drag", dragged)
				.on("end", dragended));

		// Set the position attributes of links and nodes each time the simulation ticks.
		function ticked() {
			
			link
				.attr("x1", d => d.source.x)
				.attr("y1", d => d.source.y)
				.attr("x2", d => d.target.x)
				.attr("y2", d => d.target.y);

			node
				.attr("cx", d => d.x)
				.attr("cy", d => d.y);
				
			text
				.attr("dx", d => d.x - 12)
				.attr("dy", d => (d.y + 4));
			
		}

		// Reheat the simulation when drag starts, and fix the subject position.
		function dragstarted(event) {
			if (!event.active) simulation.alphaTarget(0.3).restart();
			event.subject.fx = event.subject.x;
			event.subject.fy = event.subject.y;
		}

		// Update the subject (dragged node) position during drag.
		function dragged(event) {
			event.subject.fx = event.x;
			event.subject.fy = event.y;
		}

		// Restore the target alpha so the simulation cools after dragging ends.
		// Unfix the subject position now that it’s no longer being dragged.
		function dragended(event) {
			if (!event.active) simulation.alphaTarget(0);
			event.subject.fx = null;
			event.subject.fy = null;
		}

		el.append(svg.node());
	}

	onMount(()=>{
		window.addEventListener("resize", drawGraph);
		drawGraph();
	})

</script>

<div id="el" bind:this={el}></div>

<!-- <Svelvet id="my-canvas" height={h} TD controls fitView={true}>
	{#each main() as skill}
		<GraphNode {...skill} />
	{/each}
	<Background bgColor={"#4a464d"} slot="background" style="none"></Background>
</Svelvet> -->
