<template>
    <a-table class="table" :data-source="store.state.leads" :pagination="false" :loading="store.state.loading">
        <template #expandedRowRender="{ record }">
            <p style="margin: 0">
                {{ record.description }}
            </p>
        </template>

        <a-table-column key="name" data-index="name" title="Название" />
        <a-table-column key="price" data-index="price" title="Бюджет" />

        <a-table-column key="status" data-index="status" title="Статус">
            <template #default="{ record }">
                <a-tag :style="{ background: record.status.color }">{{ record.status.name }}</a-tag>
            </template>
        </a-table-column>

        <a-table-column key="responsible_user" title="Ответственный" data-index="responsible_user">
            <template #default="{ record }">
                <a-space>
                    <UserOutlined class="icon" />
                    <span>{{ record.responsible_user.name }}</span>
                </a-space>
            </template>
        </a-table-column>

        <a-table-column key="created_at" title="Дата создания" data-index="created_at">
            <template #default="{ record }">
                {{ parseDate(record.created_at) }}
            </template>
        </a-table-column>

    </a-table>
</template>

<script lang="ts" setup>

import { useStore } from '@/store';
import { type MainTable } from '../types/respBack';
import { UserOutlined } from '@ant-design/icons-vue';


const store = useStore();


function parseDate(value: number): string {
    const date = new Date(value);
    return `${date.getDate()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()} ${(date.getHours()).toString().padStart(2, '0')}:${(date.getMinutes()).toString().padStart(2, '0')}`;
}

</script>

<style scoped>
.icon {
    background: #1890FF;
    padding: 5px;
    color: white;
    border-radius: 100%;

}


.table {
    padding: 20px 30px;
}
</style>