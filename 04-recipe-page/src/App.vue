<template>
  <div class="c-recipe-page">
    <section class="c-recipe-page__section">
    <RecipeHeader
      :title="recipe.recipeTitle"
      :description="recipe.description"
      :imageSrc="recipe.imageSrc"
    />
    </section>
    <section class="c-recipe-page__section">
    <RecipeMeta :title="recipe.metaTitle" :metaItems="recipe.metaItems" />
    </section>
    <section class="c-recipe-page__section">
    <IngredientsList
      :title="recipe.ingredientsTitle"
      :items="recipe.ingredients"
    />
    </section>
    <section class="c-recipe-page__section">
    <InstructionList
      :title="recipe.instructionsTitle"
      :items="recipe.instructions"
    />
    </section>
    <section class="c-recipe-page__section">
    <NutritionTable
      :title="recipe.nutritionTitle"
      :text="recipe.nutritionText"
    />
    </section>
  </div>
</template>

<script setup>
import RecipeHeader from '@/components/RecipeHeader.vue';
import RecipeMeta from '@/components/RecipeMeta.vue';
import IngredientsList from '@/components/IngredientsList.vue';
import InstructionList from '@/components/InstructionList.vue';
import NutritionTable from '@/components/NutritionTable.vue';

const recipe = {
  recipeTitle: 'Simple Omelette Recipe',
  metaTitle: 'Preparation time',
  ingredientsTitle: 'Ingredients',
  instructionsTitle: 'Instructions',
  nutritionTitle: 'Nutrition',
  description: 'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
  nutritionText: 'The table below shows nutritional values per serving without the additional fillings.',
  imageSrc: new URL('./assets/images/image-omelette.jpeg', import.meta.url).href,
  metaItems: [
    'Total: Approximately 10 minutes',
    'Preparation: 5 minutes',
    'Cooking: 5 minutes'
  ],
  ingredients: [
    '2-3 large eggs',
    'Salt, to taste',
    'Pepper, to taste',
    '1 tablespoon of butter or oil',
    'Optional fillings: cheese, diced vegetables, cooked meats, herbs'
  ],
  instructions: [
    'Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
    'Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.',
    'Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
    'Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
    'Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
    'Enjoy: Serve hot, with additional salt and pepper if needed.'
  ]
};
</script>

<style scoped>
 .c-recipe-page {
    margin: 0 auto;
    max-inline-size: 700px;
    border-radius: 18px;
    padding: 32px;
    background-color: hsl(0, 0%, 100%);
 }

  .c-recipe-page__section:not(:last-child) {
    margin-block-end: 24px;
  }

  @media (max-width: 420px) {
    .c-recipe-page {
      padding: 0;
    }

    .c-recipe-page__section:not(:first-child) {
      margin: 24px;
    }
  }
</style>
