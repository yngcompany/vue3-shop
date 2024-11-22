<template>
	<header>
		<div class="logo">YNG SHOP</div>
		<nav>
			<router-link to="/">Home</router-link>
			<router-link to="/cart">Cart</router-link>
		</nav>
	</header>
</template>
  
<script>
export default {
	name: "AppHeader",
};
</script>
  
<style>
header {
	background-color: #333;
	color: #fff;
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

header .logo {
	font-size: 24px;
	font-weight: bold;
}

header nav a {
	color: #fff;
	margin-left: 15px;
	text-decoration: none;
}

header nav a:hover {
	text-decoration: underline;
}
</style>
  