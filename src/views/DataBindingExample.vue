<template>
    <div>
        <button type="button" @click="one(), two()">Add 1</button>
        <p>The count is : {{counter}}</p>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            counter: 0
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        one() {
            alert("One");
        },
        two() {
            alert("Two");
        }
    }
}
</script>

<style scoped>

</style>