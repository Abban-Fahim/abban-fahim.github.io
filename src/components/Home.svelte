<script>
	import { whatILike } from "../components/data";
	import Waterfall from "./waterfall.svelte";
	import { Canvas } from "@threlte/core";
	import BruhCorp from "./BruhCorp.svelte";
	import "./../styles/generic.scss";
	import { onMount } from "svelte";
	import Graph from "./Graph.svelte";

	let BCWidth, BCHeight;
	const BCRatio = 9 / 16;

	onMount(() => {
		BCWidth = (document.body.clientWidth ^ 2.6) * 0.8;
		BCHeight = BCWidth * BCRatio;
	});
</script>

<main>
	<h3>About me</h3>
	<p>I'm <strong>Muhammad Abban</strong>, a student and aspiring scientist, hoping to make this world a better place with my skills.</p>
	<!-- <h1>Hi there!</h1>
	<h2>I'm <strong>Muhammad Abban</strong></h2>
	<h2 dir="rtl">اسمي <strong> محمد ابان</strong></h2>
	<h4 class="flexCentred big-pad">
		Things i like: 
		<Waterfall longestWord="setting ambitious goals" words={whatILike} />
	</h4>
	<div class="flexCentred" style="justify-content: center; flex-direction: column;">
		<h4>I'm a Robotics Engineer</h4><br>
		<h4>studying at Heriot-Watt University</h4>
	</div>
	<div class="flexCentred" style="justify-content: space-around;">
		<h4>
			And a founder of <strong> <a href="https://bruh-corp.github.io/">Bruh Corp.</a></strong>
		</h4>
		<img src="/bru.gif" alt="Gif of Bruh Corp logo" />
	</div> -->
	<!-- <div class="flexCentred" style="justify-content: space-around;">
		<Canvas size={{ width: BCWidth, height: BCHeight }}>
			<BruhCorp />
		</Canvas>
	</div> -->
	<div class="flexCentred" style="justify-content: space-around;">
		<h4><strong>My skills </strong></h4>
		<div style="width: 100%;">
			<Graph />
		</div>
	</div>
</main>
