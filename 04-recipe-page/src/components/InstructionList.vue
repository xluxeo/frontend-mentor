<template>
  <div class="c-instructions-list">
    <h2 class="c-instructions-list__title" v-text="title"></h2>
    <ol class="c-instructions-list__list">
      <li class="c-instructions-list__item" v-for="(item, index) in parsedItems" :key="index">
        <span v-if="item.label" class="c-instructions-list__label">{{ item.label }}</span> <span>{{ item.text }}</span>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  title?: string;
  items?: string[];
}>();

const parsedItems = computed(() => {
  return (props.items ?? []).map((item) => {
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
.c-instructions-list__list {
  border-block-end: 1px solid hsl(0, 0%, 90%);
  padding-block-end: 18px;
}

.c-instructions-list__item {
  padding-inline-start: 18px;
  padding-block-end: 18px;
}

.c-instructions-list__label {
  font-weight: 700;
}

.c-instructions-list__item::marker {
  color: hsl(14, 45%, 36%);
  font-size: 16px;
  font-weight: 600;
}
</style>