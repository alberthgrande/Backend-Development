<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <ChildComponent title="My Child Component" :count="5" />
  </main>
</template>

<script setup>
import ChildComponent from "./components/ChildComponent.vue";
</script>
