<template>
  <div class="c-nutrition-table">
    <h2 class="c-nutrition-table__title" v-text="title"></h2>
    <p class="c-nutrition-table__text" v-text="text"></p>
    <table class="c-nutrition-table__table">
      <tbody>
        <tr>
          <td>Calories</td>
          <td>277 kcal</td>
        </tr>
        <tr>
          <td>Carbs</td>
          <td>0 g</td>
        </tr>
        <tr>
          <td>Protein</td>
          <td>20 g</td>
        </tr>
        <tr>
          <td>Fat</td>
          <td>22 g</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  text?: string;
}>();
</script>

<style scoped>
  .c-nutrition-table__table {
    inline-size: 100%;
    border-collapse: collapse;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  .c-nutrition-table__table tr + tr td {
    border-block-start: 1px solid hsl(30, 20%, 94%);
  }

  td:first-child {
    padding-block: 0.95rem;
    padding-inline-start: 32px;
    vertical-align: top;
  }

 td:last-child {
    vertical-align: top;
    inline-size: 50%;
    padding: 0.95rem 0;
    font-weight: 700;
    color: hsl(14, 45%, 36%);
  } 

  /* Mobile: keep two columns, prevent value wrapping */
  @media (max-width: 420px) {
    .c-nutrition-table__table {
      table-layout: fixed;
    }

    .c-nutrition-table__table td:first-child {
      padding-inline-start: 12px;
    }

    .c-nutrition-table__table td:last-child {
      padding-inline-end: 12px;
      text-align: right;
      white-space: nowrap;
    }
  }
</style>

