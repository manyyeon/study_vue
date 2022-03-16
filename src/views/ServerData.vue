<template>
  <div>
    <button type="button" @click="getProductList">조회</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      productList: [],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async getProductList() {
      this.productList = await this.api(
        "https://a1e284c5-db6b-4726-a0be-a72a59f81862.mock.pstmn.io/productList",
        "get",
        {}
      );
      console.log(this.productList);
    },
    async api(url, method, data) {
      return (
        await axios({
          method: method,
          url: url,
          data: data,
        }).catch((e) => {
          console.log(e);
        })
      ).data;
    },
  },
};
</script>

<style scoped></style>
