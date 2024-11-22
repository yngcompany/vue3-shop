<template>
	<div>
	<h1>Your Cart</h1>
	<p>Items in your cart will appear here.</p>
	<div v-for="item in cart" :key="item.id">
		<h2>{{ item.name }}</h2>
		<p>{{ item.price }} USD x {{ item.quantity }}</p>
		<button @click="removeFromCart(item.id)">Remove</button>
	</div>
	<p>Total: {{ total }} USD</p>
	</div>
</template>
	
<script>
	import { computed } from 'vue'; // Vue Composition API에서 제공되는 유틸리티
	import { useCartStore } from '@/store/cart'; // Pinia 스토어
	
	export default {
		setup() {
		const cartStore = useCartStore(); // Pinia의 상태를 사용
	
		const total = computed(() =>
			cartStore.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
		);
	
		return {
			cart: cartStore.cart,
			total,
			removeFromCart: cartStore.removeFromCart,
		};
		},
	};
</script>
	