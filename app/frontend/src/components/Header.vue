<template>
    <header class="header">
        <h1 class="title">Пример тестового задания Chabatul</h1>
        <InpurQuery />
    </header>
</template>

<script lang="ts" setup>

import InpurQuery from './InputQuery.vue';

</script>

<style scoped>
.title {
    font-size: 16px;
    font-weight: 500;
}

.header {
    position: relative;
    width: calc(100vw - 60px);
    padding: 20px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom: 1px solid #F0F0F0;
    top: 22px;
    left: 30px;
    z-index: 11;
}
</style>