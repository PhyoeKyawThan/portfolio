<script setup>
import { defineEmits, onMounted, onUnmounted } from "vue";

const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    commands: {
        type: Object,
        default: () => ({})
    }
});

const emit = defineEmits(["close"]);

function close() {
    emit("close");
}

function onKey(e) {
    if (e.key === "Escape") close();
}

function handleOverlayClick(e) {
    if (e.target.classList.contains('overlay')) {
        close();
    }
}

onMounted(() => {
    window.addEventListener("keydown", onKey);
});

onUnmounted(() => {
    window.removeEventListener("keydown", onKey);
});
</script>

<template>
    <Teleport to="body">
        <div v-if="visible" class="overlay" @click="handleOverlayClick">
            <div class="modal">
                <header class="modal-header">
                    <span>Available Commands</span>
                    <button class="close-btn" @click="close">×</button>
                </header>

                <div class="modal-body">
                    <div v-if="Object.keys(commands).length === 0" class="empty">
                        No commands available
                    </div>

                    <div v-else v-for="(desc, cmd) in commands" :key="cmd" class="command-row">
                        <span class="cmd">{{ cmd === '' ? 'home' : cmd }}</span>
                        <span class="desc">{{ desc }}</span>
                    </div>
                </div>

                <footer class="modal-footer">
                    <small>Press <kbd>Esc</kbd> to close</small>
                </footer>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    padding: 20px;
    animation: fadeIn 0.2s ease;
}

.modal {
    background: #0f172a;
    border: 1px solid #334155;
    border-radius: 8px;
    width: 100%;
    max-width: 500px;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    animation: slideUp 0.3s ease;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.modal-header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #334155;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(15, 23, 42, 0.95);
    color: #22d3ee;
    font-weight: 600;
    font-size: 1.1rem;
    font-family: 'Courier New', monospace;
}

.modal-body {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem;
    max-height: calc(80vh - 120px);
}

.command-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 0.5rem;
    border-bottom: 1px solid rgba(51, 65, 85, 0.5);
    font-family: 'Courier New', monospace;
}

.command-row:last-child {
    border-bottom: none;
}

.cmd {
    color: #60a5fa;
    background: rgba(37, 99, 235, 0.1);
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    font-weight: 600;
    font-size: 0.95rem;
}

.desc {
    color: #cbd5e1;
    text-align: right;
    max-width: 60%;
    font-size: 0.9rem;
}

.modal-footer {
    padding: 1rem 1.5rem;
    border-top: 1px solid #334155;
    text-align: center;
    color: #94a3b8;
    font-size: 0.85rem;
    background: rgba(15, 23, 42, 0.95);
}

.modal-footer kbd {
    background: #1e293b;
    border: 1px solid #475569;
    border-radius: 4px;
    padding: 0.1rem 0.4rem;
    font-family: monospace;
    color: #e2e8f0;
    font-size: 0.9rem;
}

.close-btn {
    background: transparent;
    border: none;
    color: #ef4444;
    font-size: 1.75rem;
    cursor: pointer;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.2s;
    padding: 0;
    line-height: 1;
}

.close-btn:hover {
    background: rgba(239, 68, 68, 0.1);
    color: #f87171;
}

.empty {
    text-align: center;
    color: #64748b;
    padding: 2rem;
    font-style: italic;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Scrollbar */
.modal-body::-webkit-scrollbar {
    width: 6px;
}

.modal-body::-webkit-scrollbar-track {
    background: rgba(30, 41, 59, 0.5);
    border-radius: 3px;
}

.modal-body::-webkit-scrollbar-thumb {
    background: #475569;
    border-radius: 3px;
}

.modal-body::-webkit-scrollbar-thumb:hover {
    background: #64748b;
}

/* Responsive */
@media (max-width: 640px) {
    .overlay {
        padding: 10px;
    }

    .modal {
        max-height: 90vh;
    }

    .modal-header,
    .modal-footer {
        padding: 0.75rem 1rem;
    }

    .modal-body {
        padding: 1rem;
    }

    .command-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.25rem;
    }

    .desc {
        text-align: left;
        max-width: 100%;
        color: #94a3b8;
    }
}
</style>