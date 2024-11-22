<template>
	<main>
		<aside>
			<h3>Categories</h3>
			<ul>
				<!-- 카테고리 목록 동적 생성 -->
				<li v-for="category in categories" :key="category">
					<a href="#" @click.prevent="filterByCategory(category)">{{ category }}</a>
				</li>
			</ul>
		</aside>
  
		<!-- 필터링된 상품 목록 (ProductList 컴포넌트를 사용) -->
		<section class="content">
			<ProductList :products="filteredProducts" />
		</section>
	</main>
</template>
  
<script>
import { ref, onMounted } from "vue";
import { getProducts } from "@/services/api";
import ProductList from "@/components/ProductList.vue";

export default {
	name: "MainContent",
	components: { ProductList },
	setup() {
		const products = ref([]); // 전체 상품 데이터
		const filteredProducts = ref([]); // 필터링된 상품 데이터
		const categories = ref(["All"]); // 초기 카테고리 값 설정

		onMounted(async () => {
			try {
				const response = await getProducts();
				products.value = response.data;
				filteredProducts.value = response.data;

				// 고유 카테고리 목록 생성
				const uniqueCategories = Array.from(
				new Set(response.data.map((product) => product.category))
				);
				categories.value = ["All", ...uniqueCategories]; // "All" 추가
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		});

		// 선택한 카테고리에 따라 상품 필터링
		const filterByCategory = (category) => {
			if (category === "All") {
				filteredProducts.value = products.value; // 전체 상품 표시
			} else {
				filteredProducts.value = products.value.filter(
					(product) => product.category === category
				);
			}
		};

		return {
			products,
			filteredProducts,
			categories,
			filterByCategory,
		};
	},
};

console.log('Main Content를 불러오는데 성공하였습니다.');
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
  