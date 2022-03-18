<template>
  <div>
    <ProvideInjectChild />
  </div>
</template>

<script>
import ProvideInjectChild from "./ProvideInjectChild.vue";

export default {
  components: { ProvideInjectChild },
  data() {
    return {
      items: ["A", "B", "C"],
    };
  },
  provide() {
    return {
      itemLength: this.items.length,
      items: this.items,
    };
  },
};
</script>

<style scoped></style>
