<script lang="ts">
import { defineComponent } from "vue";
import productDetail from "./ProductDetail.vue";

export default defineComponent({
  components: { productDetail },
  data() {
    return {};
  },
});
</script>

<template>

  <product-detail/>
  <product-detail/>
  <product-detail/>
  <product-detail/>
</template>
