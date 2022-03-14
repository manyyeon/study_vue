<template>
    <div>
        <select v-model="selectedCity">
            <option :value="city.v" :key="i" v-for="(city,i) in options">{{city.t}}</option>
        </select>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            options: [
                {v:'02', t:'서울'},
                {v:'21', t:'부산'},
                {v:'064', t:'제주'},
            ],
            selectedCity: '064'
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