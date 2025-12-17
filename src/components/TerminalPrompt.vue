<script setup>
import router from "@/router";
import { ref, onMounted } from "vue";
import HelpView from "./HelpView.vue";
import CommandList from "@/assets/data/CommandList";

let current = "";
const focus = ref(false);
const terminalInput = ref(null);
const path = ref("");
const showHelp = ref(false);
const commands = CommandList;

const helpCommands = {
    ...commands,
    help: "Show this help menu"
};

const emit = defineEmits(['update:path']);

onMounted(() => {
    terminalInput.value?.focus();
    document.addEventListener('click', () => {
        terminalInput.value?.focus();
    });
});

function doPrompt(event) {
    let routeTo = event.target.innerText.trim().toLowerCase();
    event.target.innerText = "";

    if (routeTo === "help") {
        showHelp.value = true;
        return;
    }

    if (commands[routeTo] != null && current != routeTo) {
        current = routeTo;
        path.value = current == "" ? "" : `/${routeTo}`;
        emit('update:path', current == "" ? "" : `/${routeTo}`);
        router.push(routeTo == "" ? "/" : routeTo);
    } else {
        console.log("Invalid command. Type 'help' for available commands.");
    }
}

function handleCloseHelp() {
    showHelp.value = false;
    setTimeout(() => {
        terminalInput.value?.focus();
    }, 100);
}
</script>

<template>
    <HelpView :visible="showHelp" @close="handleCloseHelp" :commands="helpCommands" />

    <div class="terminal-prompt w-100 fw-bold text-white d-flex justify-content-start align-items-center">
        <div class="text-success">
            phyoekyawthan@theX:<span class="text-primary">~/portfolio{{ path }}$</span>
        </div>
        <div ref="terminalInput" class="terminal-input text-white" contenteditable="true" spellcheck="false"
            @focus="focus = true" @blur="focus = false" @keydown.enter="doPrompt" @keydown.enter.prevent></div>
    </div>
</template>

<style scoped>
.terminal-prompt {
    font-family: monospace;
    font-size: clamp(0.75rem, 2.5vw, 1.25rem);
    white-space: nowrap;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 0.25rem;
    min-height: 1.5em;
}

.terminal-input {
    outline: none;
    border: none;
    background: transparent;
    color: #fff;
    font-family: inherit;
    font-size: inherit;
    caret-color: #0d6efd;
    min-width: 1ch;
    flex: 1;
    position: relative;
    padding-left: 2px;
}

.terminal-input:focus::after {
    content: "█";
    animation: blink 1s step-start infinite;
    color: #0d6efd;
    position: absolute;
    right: -8px;
}

@keyframes blink {

    0%,
    50% {
        opacity: 1;
    }

    51%,
    100% {
        opacity: 0;
    }
}
</style>