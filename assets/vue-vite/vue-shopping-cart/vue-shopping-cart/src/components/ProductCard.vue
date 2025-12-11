<template>
  <div class="product-card">
    <img :src="product.image" alt="Product Image" class="product-image" />
    <h3 class="product-name">{{ product.name }}</h3>
    <p class="product-price">${{ product.price.toFixed(2) }}</p>
    <button @click="addToCart" class="add-to-cart-button">Add to Cart</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Product } from '../types/product';

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as () => Product,
      required: true
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product);
    }
  }
});
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
}

.product-image {
  max-width: 100%;
  height: auto;
}

.product-name {
  font-size: 1.2em;
  margin: 12px 0;
}

.product-price {
  color: #333;
  font-weight: bold;
}

.add-to-cart-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.add-to-cart-button:hover {
  background-color: #218838;
}
</style>