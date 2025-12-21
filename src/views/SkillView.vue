<script setup>
import SkillDatas from '@/assets/data/SkillData'

const languages = SkillDatas.languages
const frameworks = SkillDatas.frameworks

const getLogoUrl = (logo) => {
    return new URL(`../assets/images/${logo}`, import.meta.url).href
}
</script>

<template>
    <div class="container py-5">
        <h2 class="text-white mb-2 text-decoration-underline">Languages</h2>

        <div id="languages" class="d-flex gap-4 mb-4">
            <div v-for="{ lang, logo } in languages" :key="lang">
                <div class="text-dark item rounded-pill d-flex gap-2">
                    <img :src="getLogoUrl(logo)" alt="" class="" />
                    <div>{{ lang }}</div>
                </div>
            </div>
        </div>

        <h2 class="text-white mb-2 text-decoration-underline">Frameworks</h2>

        <div id="framework" class="d-flex gap-4 mb-4">
            <div v-for="fw in frameworks" :key="fw">
                <div class="text-white bg-primary item rounded-pill">
                    {{ fw }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.item {
    padding: 10px;
    font-size: 12px;
    font-weight: bold;
    background-color: rgb(170, 165, 165);
}

img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
}
</style>
