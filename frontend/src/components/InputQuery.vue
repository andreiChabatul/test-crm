<template>
    <div class="container">
        <a-popover v-if="(query.length > 0 && query.length < 3)" content="Поиск работает от 3 символов">
            <WarningOutlined class="icon" />
        </a-popover>
        <a-input-search v-model:value="query" placeholder="Найти..."/>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { WarningOutlined } from '@ant-design/icons-vue';
import { useStore } from '@/store';

const query = ref<string>('');
const store = useStore();

watch(query, () => store.dispatch('fetchAPI', query.value));

</script>

<style scoped>
.container {
    display: flex;
    gap: 10px;
    align-items: center;
}

.icon {
    color: #FA8C16;
    background: none
}
</style>