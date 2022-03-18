<template>
  <div>
    <ProvideInjectChildChild :itemLength="itemLength" />
  </div>
</template>

<script>
import ProvideInjectChildChild from "./ProvideInjectChildChild.vue";
export default {
  components: { ProvideInjectChildChild },
  props: {
    itemLength: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
