<script setup>
import { RouterView } from 'vue-router';
import TerminalBar from './components/TerminalBar.vue';
import TerminalPrompt from './components/TerminalPrompt.vue';
import { ref } from 'vue';

const path = ref("");
</script>

<template>
  <title>My Portfolio</title>
  <main class="app-main">
    <div class="sticky-top overlay-menu">
      <TerminalBar :path="path"></TerminalBar>
    </div>
    <div class="content flex-fill overlay-content">
      <TerminalPrompt @update:path="path = $event"></TerminalPrompt>
      <RouterView />
    </div>
  </main>
</template>

<style>
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-main {
  background-image: url('@/assets/images/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.overlay-menu {
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  width: 100%;
}

.overlay-content {
  background-color: rgba(38, 37, 37, 0.9);
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.overlay-menu MenuBar {
  padding: 0.5rem 1rem;
}
</style>
