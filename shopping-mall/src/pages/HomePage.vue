<template>
	<div>
		<h1>Product List</h1>
		<div v-for="product in products" :key="product.id">
			<h2>{{ product.name }}</h2>
			<p>{{ product.price }} USD</p>
			<router-link :to="`/product/${product.id}`">View Details</router-link>
		</div>
	</div>
</template>
  
<script>
	import { ref, onMounted } from 'vue';
	import { getProducts } from '@/services/api';
	
	export default {
		setup() {
		const products = ref([]);
	
		onMounted(async () => {
			const response = await getProducts();
			products.value = response.data;
		});
	
		return { products };
		},
	};
</script>