<template>
    <div>
        <select v-model="city" @change="changeSelect">
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="제주">제주</option>
        </select>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            city: ""
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        changeSelect() {
            alert(this.city)
        }
    }
}
</script>

<style scoped>

</style>