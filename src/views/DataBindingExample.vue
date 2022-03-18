<template>
  <div>
    <button type="button" @click="callChildFunc">부모에 있는 클릭</button>
    <ChildComponent ref="child_component" />
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  components: { ChildComponent },
  data() {
    return {};
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    callChildFunc() {
      // this.$refs.child_component.$refs.child_btn.click();
      // this.$refs.child_component.childFunc();
      this.$refs.child_component.msg = "부모 컴포넌트에서 변경한 메시지";
    },
  },
};
</script>

<style scoped></style>
