<template>
  <div class="c-ingredients-list">
    <h2 class="c-ingredients-list__title" v-text="title"></h2>
    <ul class="c-ingredients-list__list">
      <li class="c-ingredients-list__item" v-for="(item, index) in items" :key="index" v-text="item"></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  items?: string [];
}>();

</script>

<style scoped>

.c-ingredients-list__list {
 list-style: square;
 border-block-end: 1px solid hsl(0, 0%, 90%);
 padding-block-end: 32px;
}

.c-ingredients-list__item {
  padding-inline-start: 18px;
  padding-block-end: 18px;
}

.c-ingredients-list__item:last-child {
  padding-block-end: 0;
}

.c-ingredients-list__item::marker {
  color: hsl(14, 45%, 36%);
  font-size: 10px;
}
</style>