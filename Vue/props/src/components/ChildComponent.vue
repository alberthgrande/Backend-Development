<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  count: Number,
});
</script>
