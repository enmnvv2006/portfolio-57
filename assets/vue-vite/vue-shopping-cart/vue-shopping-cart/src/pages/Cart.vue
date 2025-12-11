<!-- filepath: /Users/user/Documents/projects/vue-vite/vue-shopping-cart/vue-shopping-cart/src/pages/Cart.vue -->
<template>
  <div class="cart-page">
    <ShoppingCart :cartItems="cartStore.items" />
    <button @click="cartStore.items = []">Clear Cart</button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../stores/cartStore';
import ShoppingCart from '../components/ShoppingCart.vue';

const cartStore = useCartStore();
</script>

<style scoped>
.cart-page {
  padding: 20px;
}
</style>