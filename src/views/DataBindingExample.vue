<template>
    <div v-bind:style="[baseStyle, addStyle]">인라인 스타일 Binding</div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            /// CamelCase로 써줘야함
            styleObject: {
                backgroundColor: 'yellow',
                color: 'red',
                fontWeight: 'bold'
            },
            baseStyle: 'background-color:yellow',
            addStyle: 'color:red;font-weight:bold'
        }
    },
}
</script>

<style scoped>
.container{
    width: 100%;
    height: 200px;
}
.active{
    background-color: blue;
    font-weight: bold;
}
.text-red{
    color:red;
}
</style>