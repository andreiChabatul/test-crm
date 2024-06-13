<script setup lang="ts">
import MainTable from './components/MainTable.vue';
import Header from './components/Header.vue'
import { useStore } from './store';

const store = useStore();

store.dispatch('fetchAPI')
</script>

<template>
    <Header />
    <MainTable />
</template>

<style scoped></style>
