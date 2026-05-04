<script setup>
import { defineProps } from "vue";

defineProps(["event"]);
</script>

<template>
   <div>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
   <p>{{ event.description }}</p>
</div>
</template>
