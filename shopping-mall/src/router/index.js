import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ProductPage from "@/pages/ProductPage.vue";
import CartPage from "@/pages/CartPage.vue";

// 상품 ID를 포함한 URL처리를 위한 Vue router 동적 라우트 실행
const routes = [
	{ path: "/", name: "Home", component: HomePage },
	{ path: "/product/:id", name: "Product", component: ProductPage },
	{ path: "/cart", name: "Cart", component: CartPage },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
