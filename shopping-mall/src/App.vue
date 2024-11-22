<template>
	<div id="app">
		<!-- Header -->
		<AppHeader />
	
		<!-- Main Content -->
		<MainContent />
	
		<!-- Footer -->
		<AppFooter />
	</div>
</template>
  
<script>
	import AppHeader from "@/components/AppHeader.vue";
	import AppFooter from "@/components/AppFooter.vue";
	import MainContent from "@/components/MainContent.vue";
	
	export default {
		name: "App",
		components: {
		AppHeader,
		AppFooter,
		MainContent,
		},
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
  