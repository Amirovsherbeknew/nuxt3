<template>
    <div>
        <input type="text" :value="props.title" @input="event => $emit('update:title', (event.target as HTMLFormElement).value)"/>
    </div>
</template>
<script lang='ts' setup>
import { defineProps } from 'vue';
const props = defineProps({
  title: String
})
</script>