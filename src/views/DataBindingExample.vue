<template>
  <div>
    <input type="text" v-model.number="x1" />
    <input type="text" v-model.number="x2" />
    <input type="text" v-model="y" />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      x1: 0,
      x2: 0,
      y: 0,
    };
  },
  watch: {
    x1() {
      this.y = this.x1 + this.x2;
    },
    x2() {
      this.y = this.x1 + this.x2;
    },
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style scoped></style>
