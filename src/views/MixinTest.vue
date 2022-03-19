<template>
  <div>
    <button type="button" @click="getProductList">조회</button>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product, i) in productList">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiMixin from "../api.js";

export default {
  mixins: [ApiMixin],
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
      this.productList = await this.$callAPI(
        "https://a1e284c5-db6b-4726-a0be-a72a59f81862.mock.pstmn.io/productList",
        "get",
        {}
      );
      console.log(this.productList);
    },
  },
};
</script>

<style scoped></style>
