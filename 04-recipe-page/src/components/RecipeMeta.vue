<template>
  <div class="c-recipe-meta">
    <h2 class="c-recipe-meta__title" v-text="title"></h2>
    <ul class="c-recipe-meta__list">
      <li class="c-recipe-meta__item" v-for="(item, index) in parsedMetaItems" :key="index">
        <span class="c-recipe-meta__label" v-if="item.label">{{ item.label }}</span><span>&nbsp;{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  title?: string;
  metaItems?: string[];
}>();

const parsedMetaItems = computed(() => {
  return (props.metaItems ?? []).map((item) => {
    const parts = item.split(/:(.+)/);

    if (parts.length === 3) {
      return {
        label: `${parts[0]}:`,
        text: parts[1].trimStart(),
      };
    }

    return {
      label: '',
      text: item,
    };
  });
});
</script>

<style scoped>
  .c-recipe-meta {
    border-radius: 12px;
    padding: 12px;
    background-color: hsl(330, 100%, 98%);
  }

  .c-recipe-meta__title {
    padding-inline-start: 18px;
    color: hsl(332, 51%, 32%);
    font-size: 1rem;
    font-weight: 700;
    font-family: 'Outfit', sans-serif;
  }

  .c-recipe-meta__item::marker {
    padding-block-end: 8px;
    color: hsl(332, 51%, 32%);
  }

  .c-recipe-meta__item {
    padding-block-end: 8px;
  }

  .c-recipe-meta__label {
    font-weight: 700;
  }
</style>

