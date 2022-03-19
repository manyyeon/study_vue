<template>
  <div>
    <input type="text" v-model.number="num1" @keyup="plusNumbers" />
    <span> + </span>
    <input type="text" v-model.number="num2" @keyup="plusNumbers" />
    <span> = </span>
    <span>{{ result }}</span>
  </div>
</template>

<script>
export default {
  name: "calculatorExample",
  components: {},
  data() {
    return {
      num1: 0,
      num2: 0,
      result: 0,
    };
  },
  methods: {
    plusNumbers() {
      this.result = this.num1 + this.num2;
    },
  },
};
</script>

<style scoped></style>
