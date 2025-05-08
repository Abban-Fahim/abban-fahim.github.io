<script>
	import { whatILike } from "../components/data";
	import Waterfall from "./waterfall.svelte";
	import { Canvas } from "@threlte/core";
	import BruhCorp from "./BruhCorp.svelte";
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
	<div class="flexCentred" style="justify-content: space-between;">
		<div style="padding: 25px; width: 70vw;">
			<h3>About me</h3>
			<p>I'm <strong>Muhammad Abban</strong>, a student and aspiring engineer, hoping to make this world a better place with my skills.</p>
			<p>I'm currently studying <strong>robotics</strong> at Heriot-Watt University, Dubai, due to graduate in the summer of 2026. I strive to bring together my childhood passions of game development, math and helping people, to explore and create new technology that can improve our lives. </p>
			<!-- Aside from that, I also like learning about and working on less practical concepts to try pushing technology -->
		</div>
		<img src="/moi.jpg" alt="a pic of me outdoors, in some amazing weather" style="width: 280px; border: 12px #17ad98 groove;">
	</div>
	
	<div class="flexCentred" style="justify-content: space-around;">
		<h3>My skills</h3>
		<div style="width: 100%; text-align: center;">
			<Graph />
		</div>
	</div>
	
	<div style="justify-content: space-around;">
		<p>My research interests are in <strong>computer vision</strong> and <strong>reinforcement learning</strong>, specially when applied to control robots, and I'm excited in particular about neuromorphic computing and <strong>event cameras</strong>, which hold much untapped potential for the future of robotics.</p>
		<p>Outside of academic work and coding, I like to drink a lot of tea, read sometimes and compose some music.</p>
	</div>

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
</main>
