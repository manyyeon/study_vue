<template>
  <div>
    <div>CompositionAPI4</div>
    <p></p>
    <input type="text" v-model.number="num1" />
    <span> + </span>
    <input type="text" v-model.number="num2" />
    <span> = </span>
    <span>{{ result }}</span>
  </div>
</template>

<script>
import { plusCalculator } from "../common.js"; // toRefs 추가

export default {
  setup() {
    let { num1, num2, result } = plusCalculator(); // 외부 function

    return {
      num1,
      num2,
      result,
    };
  },
};
</script>

<style scoped></style>
