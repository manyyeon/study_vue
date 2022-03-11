<template>
    <!-- <select v-model="city">
        <option value="02">서울</option>
        <option value="21">부산</option>
        <option value="064">제주</option>
    </select> -->
    <!-- <label><input type="checkbox" value="서울" v-model="checked">서울 체크</label>
    <label><input type="checkbox" value="부산" v-model="checked">부산 체크</label>
    <label><input type="checkbox" value="제주" v-model="checked">제주 체크</label>
    <br>
    <span> 체크한 지역 : {{checked}} </span> -->
    <label><input type="radio" v-bind:value="radio[0]" v-model="picked">서울 선택</label>
    <label><input type="radio" v-bind:value="radio[1]" v-model="picked">부산 선택</label>
    <label><input type="radio" v-bind:value="radio[2]" v-model="picked">제주 선택</label>
    <br>
    <span> 선택한 지역 : {{picked}} </span>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            city: "064",
            checked: [],
            picked: "",
            radio: ["서울!", "부산~", "제주:)"]
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {

    }
}
</script>

<style scoped>

</style>