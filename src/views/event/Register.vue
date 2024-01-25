<script setup>
import { defineProps } from "vue";
const register = () => {
  console.log("registering for event");
};

defineProps(["event"]);
</script>
<template>
  <div>
  <p>Register for the event here</p>
  <button @click="register">register me!</button>
</div>
</template>
