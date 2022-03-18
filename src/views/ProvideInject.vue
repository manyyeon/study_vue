<template>
  <div>
    <ProvideInjectChild :itemLength="items.length" />
  </div>
</template>

<script>
import ProvideInjectChild from "./ProvideInjectChild.vue";

export default {
  components: { ProvideInjectChild },
  data() {
    return {
      items: ["A", "B"],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style scoped></style>
