<template>
  <div class="home">
    <h1>Product List</h1>
    <div class="product-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import { Product } from '../types/product';

export default defineComponent({
  name: 'Home',
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', price: 29.99, image: 'path/to/image1.jpg' },
        { id: 2, name: 'Product 2', price: 39.99, image: 'path/to/image2.jpg' },
        { id: 3, name: 'Product 3', price: 49.99, image: 'path/to/image3.jpg' },
      ] as Product[],
    };
  },
  methods: {
    addToCart(product: Product) {
      this.$emit('add-to-cart', product);
    },
  },
});
</script>

<style scoped>
.home {
  padding: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
</style>