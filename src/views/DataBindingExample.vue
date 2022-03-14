<template>
    <div>
        <h1 v-show="bRender">bRender가 true이면 렌더링됩니다.</h1>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            bRender: false
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