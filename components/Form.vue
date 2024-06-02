<template>
    <div>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
      <button @click="reset">Reset</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue';
  
    const count = ref(0);
  
  function increment () {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  const reset = () => {
    count.value = 0;
  };

  const doSomethingOnMount = () => {
    console.log('Bu funksiya komponent sahifaga yuklandiğida chaqiriladi');
    // Boshqa kerakli amallarni buning ichida bajarishingiz mumkin
  };

  onMounted(doSomethingOnMount);

  
  </script>
  