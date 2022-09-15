<script setup lang="ts">
import Header from "./components/Header.vue";
import { useGameScore } from "@/stores/score";
import GameField from "@/components/GameField.vue";

const score = useGameScore();
</script>

<template>
  <Header :score="score" />
  <GameField />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
