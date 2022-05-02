<template>
  <div>
    <button @click="categoryAddClick()">Add category</button>
    <div v-show="categoryToggle">
      <input v-model="category" />
      <button @click="OnClickSave()">Add</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddCategoryFormButton",
  data() {
    return {
      category: "",
      categoryToggle: false,
    };
  },
  methods: {
    categoryAddClick() {
      this.categoryToggle = !this.categoryToggle;
    },
    OnClickSave() {
      const category = this.category;
      this.$store.commit("addDataToCategoryList", category);
    },
  },
};
</script>
