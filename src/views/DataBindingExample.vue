<template>
  <div>
    <page-title :title="title" />
    <ChildComponent
      :likes="23"
      :isOk="true"
      :commentIds="commentIds"
      :author="author"
    />
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import ChildComponent from "./ChildComponent.vue";

export default {
  components: { "page-title": PageTitle, ChildComponent },
  data() {
    return {
      title: "부모 컴포넌트에서 전송할 타이틀",
      commentIds: [1, 5, 2, 3],
      author: {
        name: "홍길동",
        company: "회사",
      },
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
