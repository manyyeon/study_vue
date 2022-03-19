<template>
  <div>
    <div>CompositionAPI3</div>
    <p></p>
    <input type="text" v-model.number="num1" />
    <span> + </span>
    <input type="text" v-model.number="num2" />
    <span> = </span>
    <span>{{ result }}</span>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from "vue"; // toRefs 추가

function plusCalculator() {
  let state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => state.num1 + state.num2),
  });
  return toRefs(state); // 반응형으로 선언된 num1, num2, result가 외부 function에서 정상적으로 사용하기 위해 toRefs 사용해서 return
}

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
