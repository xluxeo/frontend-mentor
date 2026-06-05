<template>
  <div class="c-recipe-header">
    <img class="c-recipe-header__image" :src="imageSrc" :alt="title"  />
    <div class="c-recipe-header__content">
    <h1 class="c-recipe-header__title" v-text="title"></h1>
    <p class="c-recipe-header__description" v-text="description"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  description?: string;
  imageSrc?: string;
}>();

</script>

<style scoped>
  .c-recipe-header__title {
    color: hsl(24, 5%, 18%);
  }

  .c-recipe-header__image {
    display: block;
    max-inline-size: 100%;
    inline-size: 100%;
    block-size: auto;
    border-radius: 8px;
  }

    @media (max-width: 420px) {
    .c-recipe-header__image {
      border-radius: 0;
    }

    .c-recipe-header__content {
      margin: 24px;
    }
  }
</style>