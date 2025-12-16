<script setup>
defineProps({
    to: String,
    text: String
})
</script>

<template>
    <RouterLink :to="to" active-class="text-decoration-underline fw-bold"
        class="text-white fs-5 p-2 text-decoration-none text-nowrap">PhyoeKyawThan@portfolio/{{ text }}</RouterLink>
</template>

<style scoped></style>