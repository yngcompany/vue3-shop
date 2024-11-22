<!-- db.json -->
<template>
	<div>
		<h1>Product List</h1>
		<div class="product-list">
			<div v-for="product in products" :key="product.id" class="wrap-prd">
				<h2>{{ product.name }}</h2>
				<p>{{ product.price }} KRW</p>
				<span>{{ product.description }}</span>
				<router-link :to="`/product/${product.id}`" class="go-details">View Details</router-link>
			</div>
		</div>
	</div>
</template>
  
<script>
	import { ref, onMounted } from 'vue';
	import { getProducts } from '@/services/api';
	
	export default {
		setup() {
			const products = ref([]); // 상품 데이터를 저장할 ref
		
			// 컴포넌트가 마운트되었을 때 데이터 가져오기
			onMounted(async () => {
				try {
					const response = await getProducts();
					products.value = response.data; // API에서 데이터를 가져와 저장
				} catch (error) {
					console.error("Error fetching products:", error);
				}
			});
		
			return { 
				products, // 템플릿에서 사용 가능하도록 반환
			};
		},
	};
</script>

<style>
.wrap-prd {display:flex; flex-direction:column; margin:20px 0;}
.go-details { font-size:14px; text-decoration:none; color:#ccc;}
.go-details:hover {color:#888;}
</style>