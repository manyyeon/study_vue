<template>
  <div>
    <h1>장바구니: {{ cartCount }}개</h1>
    <h1>장바구니 - category가 A인 것만 : {{ productACount }}개</h1>
    <h2>Count: {{ count }}</h2>
    <button type="button" @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    cartCount() {
      return this.$store.getters.cartCount;
    },
    productACount() {
      return this.$store.getters.productACount;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
};
</script>

<style scoped></style>
