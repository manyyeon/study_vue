<template>
    <div>
        <button type="button" v-on:click="increaseCounter">Add 1</button>
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
        increaseCounter() {
            this.counter = this.counter + 1
        }
    }
}
</script>

<style scoped>

</style>