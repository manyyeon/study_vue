<template>
  <h1 class="page-title">{{ title }}</h1>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "페이지 타이틀",
    },
  },
};
</script>
<style scoped>
.page-title {
  padding-left: 5px;
  border-left: 3px solid violet;
  text-align: left;
}
</style>
