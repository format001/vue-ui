<template>
    <tr>
        <th v-for="(weekDay, index) in WEEKDAY" :key="index">
            {{ weekDay }}
        </th>
    </tr>
</template>

<script setup>
    import { WEEKDAY } from './config/index.js'
</script>
