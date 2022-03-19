<template>
  <div>
    <div>CompositionAPI2</div>
    <p></p>
    <input type="text" v-model.number="state.num1" />
    <span> + </span>
    <input type="text" v-model.number="state.num2" />
    <span> = </span>
    <span>{{ state.result }}</span>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  setup() {
    let state = reactive({
      num1: 0,
      num2: 0,
      result: computed(() => state.num1 + state.num2), // computed를 이용해서 num1, num2 실시간 변경사항에 대한 반응형 적용
    });

    return {
      state,
    };
  },
};
</script>

<style scoped></style>
