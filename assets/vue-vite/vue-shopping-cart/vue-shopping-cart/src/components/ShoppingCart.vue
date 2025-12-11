<!-- filepath: /Users/user/Documents/projects/vue-vite/vue-shopping-cart/vue-shopping-cart/src/components/ShoppingCart.vue -->
<template>
  <div class="shopping-cart">
    <h2>Shopping Cart</h2>
    <div v-if="props.cartItems.length === 0" class="empty-cart">
      <p>Your cart is empty</p>
    </div>
    <div v-else>
      <div v-for="item in props.cartItems" :key="item.id" class="cart-item">
        <span>{{ item.name }}</span>
        <span>${{ item.price.toFixed(2) }}</span>
      </div>
      <div class="cart-total">
        <strong>Total: ${{ total.toFixed(2) }}</strong>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import type { Product } from '../stores/cartStore';

const props = defineProps<{
  cartItems: Product[];
}>();

const total = computed(() => {
  return props.cartItems.reduce((sum: number, item: Product) => sum + item.price, 0);
});
</script>

<style scoped>
.shopping-cart {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.cart-total {
  margin-top: 15px;
  font-size: 18px;
}

.empty-cart {
  text-align: center;
  color: #999;
}
</style>