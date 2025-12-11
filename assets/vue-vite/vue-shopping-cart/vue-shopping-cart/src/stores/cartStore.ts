import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<Product[]>([]);

  const addItem = (product: Product) => {
    items.value.push(product);
  };

  const removeItem = (productId: number) => {
    items.value = items.value.filter(item => item.id !== productId);
  };

  const total = computed(() => {
    return items.value.reduce((sum: number, item: Product) => sum + item.price, 0);
  });

  const cartCount = computed(() => items.value.length);

  return {
    items,
    addItem,
    removeItem,
    total,
    cartCount,
  };
});