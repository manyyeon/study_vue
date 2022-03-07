<template>
    <div>
        <h1>
        {{title}}
    </h1>
    <input type="text" v-model="title" />
    </div>
    
</template>

<script>
export default {
    components: {},
    data() {
        return {
            title: "Hello World"
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