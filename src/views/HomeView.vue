<script setup>
import HomeDataLines from '@/assets/data/HomeData';
import { onMounted, ref } from 'vue';

const lines = HomeDataLines;
const lead = ref("");
onMounted(() => {
    let i = 0;
    function typeLine() {
        if (i < lines.length) {
            document.getElementById("line-parent").innerHTML += lines[i];
            i++;
            setTimeout(typeLine, 600);
        }
    }
    typeLine();
});

</script>

<template>
    <div class="container py-5">

        <div id="card" class="card bg-dark text-white p-4 shadow-lg rounded">
            <h2 id="lead-line" class="text-center text-white mb-4">
                Hello, I'm <span class="text-primary">Phyoe Kyaw Than</span> from Myanmar
            </h2>

            <ul id="line-parent" class="list-group list-group-flush mt-3">

            </ul>
        </div>
    </div>
</template>

<style scoped>
body {
    background-color: #0d1117;
    /* dark terminal-like background */
    font-family: monospace;
}

h2 {
    font-weight: bold;
    font-family: monospace;
}

.lead {
    font-size: 1.2rem;
}

.list-group-item i {
    color: #0d6efd;
    /* primary accent color for tech stack */
}
</style>
