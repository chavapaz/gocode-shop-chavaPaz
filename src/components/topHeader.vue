<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      categories: [
        "All Jackets",
        "2016",
        "jacket",
        "Jackets",
        "layers",
        "Obermeyer",
        "Roxy",
        "womens",
      ] as Array<string>,
    };
  },
  methods: {
    filterChanged(event: Event) {
      this.$emit("filterChanged", (event.target as HTMLSelectElement).value);
    },
  },
});
</script>
<template>
  <nav class="product-filter">
    <h1>Jackets</h1>
    <div class="sort">
      <div class="collection-sort">
        <label>Filter by:</label>
        <select @change="filterChanged">
          <option v-for="category in categories" :key="category">
            {{ category }}
          </option>
        </select>
      </div>

      <div class="collection-sort">
        <label>Sort by:</label>
        <select>
          <option value="/">Featured</option>
          <option value="/">Best Selling</option>
          <option value="/">Alphabetically, A-Z</option>
          <option value="/">Alphabetically, Z-A</option>
          <option value="/">Price, low to high</option>
          <option value="/">Price, high to low</option>
          <option value="/">Date, new to old</option>
          <option value="/">Date, old to new</option>
        </select>
      </div>
    </div>
  </nav>
</template>
