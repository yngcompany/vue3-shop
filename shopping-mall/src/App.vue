<template>
	<div id="app">
		<!-- Header -->
		<AppHeader />

		<!-- MainContent가 기본적으로 렌더링 -->
		<router-view />
	
		<!-- Footer -->
		<AppFooter />
	</div>
</template>
  
<script>
	import AppHeader from "@/components/AppHeader.vue";
	import AppFooter from "@/components/AppFooter.vue";
	
	export default {
		name: "App",
		components: { AppHeader, AppFooter },
	};
</script>
  
<style>
	/* Reset styles */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	body {
		font-family: Arial, sans-serif;
		line-height: 1.6;
		background-color: #f5f5f5;
	}
</style>
  