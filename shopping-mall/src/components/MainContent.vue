<template>
	<main>
		<aside>
			<h3>Categories</h3>
			<ul>
			<li><a href="#">All Products</a></li>
			<li><a href="#">T-Shirts</a></li>
			<li><a href="#">Jeans</a></li>
			<li><a href="#">Shoes</a></li>
			</ul>
		</aside>
	
		<!-- Content dynamically rendered by Vue Router -->
		<section class="content">
			<router-view />
		</section>
	</main>
</template>
  
<script>
	export default {
		name: "MainContent",
	};
</script>
  
<style>
	main {
		display: flex;
		margin: 20px;
	}
	
	aside {
		width: 20%;
		background-color: #fff;
		padding: 15px;
		margin-right: 20px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}
	
	aside h3 {
		margin-bottom: 10px;
	}
	
	aside ul {
		list-style: none;
	}
	
	aside ul li {
		margin-bottom: 10px;
	}
	
	aside ul li a {
		text-decoration: none;
		color: #333;
	}
	
	aside ul li a:hover {
		color: #007BFF;
	}
	
	.content {
		width: 80%;
		background-color: #fff;
		padding: 20px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}
</style>
  