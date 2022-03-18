<template>
  <div>
    <button type="button" @click="childFunc" ref="child_btn">
      자식에 있는 클릭
    </button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    childFunc() {
      alert("부모 컴포넌트에서 직접 발생시킨 이벤트");
    },
  },
};
</script>

<style scoped></style>
