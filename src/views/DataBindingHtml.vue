<template>
    <div v-html="htmlString"></div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            htmlString: '<p style="color:red;">This is a red string.</p>'
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