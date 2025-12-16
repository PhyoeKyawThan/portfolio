<script setup>
import { ref } from "vue";
defineProps({
    path: String
})

</script>
<template>

    <div class="text-center bg-dark p-3 fw-bold text-white">
        phyoekyawthan@theX:~/portfolio{{ path }}
    </div>
</template>

<style scoped>
/* div{
        width: 400px;
    } */
</style>