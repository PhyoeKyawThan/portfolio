<template>
    <div class="w-100 fw-bold text-white d-flex justify-content-start align-items-center">
        <div class="text-success fs-5 me-2">
            phyoekyawthan@theX:<span class="text-primary">~/portfolio{{ path }}$</span>
        </div>
        <div ref="terminalInput" class="terminal-input text-white overflow-scroll" contenteditable="true"
            spellcheck="false" @focus="focus = true" @blur="focus = false" @keydown.enter="doPrompt"
            @keydown.enter.prevent></div>
    </div>
</template>

<script setup>
import router from "@/router";
import { ref, onMounted } from "vue";
let current = "";
const focus = ref(false);
const terminalInput = ref(null);
const path = ref("");
const commands = {
    "": "Home",
    "/": "Home",
    "skills": "My Skills",
    "about": "About me"
}

const emit = defineEmits(['update:path']);
onMounted(() => terminalInput.value?.focus());

function doPrompt(event) {
    let routeTo = event.target.innerText.trim();
    if (commands[routeTo] != null && current != routeTo) {
        current = routeTo;
        path.value = current == "" ? "" : `/${routeTo}`;
        event.target.innerText = "";
        emit('update:path', current == "" ? "" : `/${routeTo}`);
        router.push(routeTo == "" ? "/" : routeTo);
    }
    else
        alert(commands);
}
</script>

<style scoped>
.terminal-input {
    outline: none;
    border: none;
    background: transparent;
    color: #0d6efd;
    font-family: monospace;
    font-size: 1.25rem;
    caret-color: #0d6efd;
    min-width: 10ch;
}

.terminal-input::after {
    /* content: "|"; */
    animation: blink 1s step-start infinite;
    color: #0d6efd;
    margin-left: 2px;
}

.terminal-input:not(:focus)::after {
    content: '';
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}
</style>
