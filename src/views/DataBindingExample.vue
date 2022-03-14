<template>
    <div>
        <h1>Hello, {{getFullName()}}</h1>
        <h1>Hello, {{getFullName()}}</h1>
        <h1>Hello, {{getFullName()}}</h1>
        <h1>Hello, {{getFullName()}}</h1>
        <h1>Hello, {{getFullName()}}</h1>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            firstName: '재석',
            lastName: '유',
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        getFullName() {
            return this.lastName + this.firstName;
        }
    }
}
</script>

<style scoped>

</style>