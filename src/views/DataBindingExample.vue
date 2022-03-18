<template>
  <div>
    <button type="button" @click="showData">부모 버튼</button>
    <ChildComponent ref="child_component" />
    <h1>{{ parentMsg }}</h1>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  components: { ChildComponent },
  data() {
    return {
      parentMsg: "",
    };
  },
  computed: {
    msg() {
      return this.$refs.child_component.msg;
    },
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    showData() {
      //alert(this.msg);
      this.parentMsg = this.msg;
    },
  },
};
</script>

<style scoped></style>
