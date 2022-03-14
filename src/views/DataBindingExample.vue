<template>
    <div>
        <input type="text" v-model="lastName" />
        <input type="text" v-model="firstName" />
        <h1>Hello, {{fullName}}</h1>
        <h1>Hello, {{fullName}}</h1>
        <h1>Hello, {{fullName}}</h1>
        <h1>Hello, {{fullName}}</h1>
        <h1>Hello, {{fullName}}</h1>
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
    computed: {
        fullName() {
            return this.lastName + this.firstName;
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