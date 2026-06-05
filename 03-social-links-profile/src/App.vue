<template>
  <div class="c-card">
    <div class="c-card__wrapper">
      <div class="c-card__header">
        <img class="c-card__image" :src="avatarUrl" alt="Card Image">
      </div>
      <div class="c-card__body">
        <hgroup class="c-card__hgroup">
          <h2 class="c-card__title">{{ name }}</h2>
          <p class="c-card__subtitle">{{ subtitle }}</p>
        </hgroup>
        <p class="c-card__text">{{ text }}</p>
      </div>
      <div class="c-card__footer">
        <div class="c-card__link-container" v-for="link in links" :key="link.name">
          <a :href="link.url" class="c-card__link" target="_blank">{{ link.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import avatarUrl from './assets/images/avatar-jessica.jpeg'
const name = ref('Jessica Randall')
const subtitle = ref('London, United Kingdom')
const text = ref('"Front-end developer and avid reader."')

const links = ref([
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'Frontend Mentor', url: 'https://www.frontendmentor.io' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com' },
  { name: 'Twitter', url: 'https://www.twitter.com' },
  { name: 'Instagram', url: 'https://www.instagram.com' }
])
</script>

<style scoped>

.c-card {
  background-color:hsl(0, 0%, 12%);
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  inline-size: 350px;
  text-align: center;
}

.c-card__wrapper {
  display: grid;
  gap: 20px;
  margin: 20px;
  padding: 32px 20px;
}

.c-card__header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.c-card__image {
  border-radius: 50%;
  inline-size: 80px;
  block-size: 80px;
}

.c-card__body {
  display: grid;
  gap: 24px;
}

.c-card__hgroup {
  display: grid;
  gap: 8px;
}

.c-card__title {
  font-size: 18px;
}

.c-card__subtitle {
  font-size: 12px;
  color: hsl(75, 94%, 57%);
}

.c-card__text {
  font-size: 11px;
  color: hsl(0, 0%, 70%);
}

.c-card__footer {
  display: grid;
  gap: 18px;
}

.c-card__link-container {
  border-radius: 5px;
  padding: 12px 10px;
  background-color: hsl(0, 0%, 20%);
}

.c-card__link-container:hover {
  background-color: hsl(90, 2%, 79%);
}

.c-card__link {
  font-size: 12px;
  color: hsl(0, 0%, 100%);
  text-decoration: none;
}

.c-card__link:hover {
  color: hsl(75, 94%, 57%);
}
</style>