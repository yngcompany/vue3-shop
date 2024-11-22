import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
	state: () => ({
		cart: [],
	}),
	actions: {
		addToCart(item) {
		const existingItem = this.cart.find((cartItem) => cartItem.id === item.id);
		if (existingItem) {
			existingItem.quantity += 1;
		} else {
			this.cart.push({ ...item, quantity: 1 });
		}
		},
		removeFromCart(id) {
		this.cart = this.cart.filter((cartItem) => cartItem.id !== id);
		},
	},
});
