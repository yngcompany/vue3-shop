<template>
	<div class="product-list">
		<div class="product-card" v-for="product in products" :key="product.id">
			<h2>{{ product.name }}</h2>
			<p>{{ product.description }}</p>
			<span>{{ product.price }} KRW</span>
			<router-link :to="`/product/${product.id}`" class="go-details">View Details</router-link>
		</div>
	</div>
</template>
  
<script>
export default {
	name: "ProductList",
	props: {
	products: {
		type: Array,
		required: true,
	},
	},
};

console.log('product list');
</script>
  
<style>
	.product-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 20px;
	}
	
	.product-card {
		background: #fff;
		padding: 15px;
		border-radius: 5px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		text-align: center;
		display: flex;
		flex-direction: column;
	}
	
	.product-card h2 {
		font-size: 20px;
		margin-bottom: 10px;
	}
	
	.product-card p {
		color: #555;
		margin-bottom: 10px;
	}
	
	.go-details {
		font-size: 14px;
		text-decoration: none;
		color: #007BFF;
	}
	
	.go-details:hover {
		color: #0056b3;
  }
</style>  