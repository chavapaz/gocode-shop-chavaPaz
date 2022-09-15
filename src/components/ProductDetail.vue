<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { productModel } from "@/models/productModel";

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<productModel>,
      required: true,
    },
  },
  data() {
    return {};
  },
});
</script>

<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="product.image" />
    </div>
    <div class="product-info">
      <h5>{{ product.title }}</h5>
      <h6>{{ product.price }}</h6>
    </div>
  </div>
</template>
