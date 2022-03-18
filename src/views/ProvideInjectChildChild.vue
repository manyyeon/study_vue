<template>
  <div>Item Length: {{ this.itemLength }}</div>
  <div>Items : {{ items }}</div>
</template>

<script>
export default {
  inject: ["itemLength", "items"],
};
</script>

<style scoped></style>
