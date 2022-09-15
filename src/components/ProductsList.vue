<script lang="ts">
import { defineComponent, type PropType } from "vue";
import productDetail from "./ProductDetail.vue";
import type { productModel } from "@/models/productModel";

export default defineComponent({
  components: { productDetail },
  props: {
    products: {
      type: Array as PropType<Array<productModel>>,
      required: true,
    },
    filterBy: {
      type: String as PropType<string>,
    },
  },
  data() {
    return {};
  },
});
</script>

<template>
  <section class="products">
    <template v-for="item in products" :key="item.id">
      <product-detail :product="item" />
    </template>
  </section>
</template>
