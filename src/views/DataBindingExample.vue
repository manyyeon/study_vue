<template>
    <div>
        <input type="text" v-model="textValue" @keyup.enter="showValue" />
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            textValue: ""
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        showValue() {
            // tab, delete, esc, space, up, down, left, right
            alert(this.textValue);
        }
    }
}
</script>

<style scoped>

</style>