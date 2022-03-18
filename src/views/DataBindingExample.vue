<template>
  <div>
    <ChildComponent @send-message="sendMessage" />
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
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    sendMessage(data) {
      // alert(data);
      this.parentMsg = data;
    },
  },
};
</script>

<style scoped></style>
