<template>
	<div v-if="product">
		<h1>{{ product.name }}</h1>
		<p>{{ product.description }}</p>
		<p>{{ product.price }} USD</p>
	</div>
	<div v-else>
	  	<p>Loading product details...</p>
	</div>
</template>
  
<script>
import axios from "axios";

export default {
	name: "ProductPage",
	data() {
		return {
			product: null, // 상품 데이터를 저장
		};
	},
	async mounted() {
		// URL에서 상품 ID 추출
		const productId = this.$route.params.id;

		// 상품 데이터 요청
		try {
			const response = await axios.get(`http://localhost:3000/products/${productId}`);
			this.product = response.data;
		} catch (error) {
			console.error("Error fetching product details:", error);
		}
	},
};
</script>
  
<style>
/* 필요한 스타일 추가 가능 */
</style>
  