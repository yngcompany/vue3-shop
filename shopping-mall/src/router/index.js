import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ProductPage from "@/pages/ProductPage.vue";
import CartPage from "@/pages/CartPage.vue";

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
