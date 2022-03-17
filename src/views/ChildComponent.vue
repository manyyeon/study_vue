<template>
  <div>
    <div>likes: {{ likes }}</div>
    <div>isOk: {{ isOk }}</div>
    <div>commentIds : {{ commentIds }}</div>
    <div>author name : {{ author.name }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  props: {
    likes: {
      type: Number,
      default: 0,
    },
    isOk: {
      type: Boolean,
      default: false,
    },
    commentIds: {
      type: Array,
    },
    author: {
      type: Object,
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
