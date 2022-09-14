<script setup lang="ts">
import Header from "./components/Header.vue";
import { useGameScore } from "@/stores/score";
import GameField from "@/components/GameField.vue";

const score = useGameScore();
const win1 = () => score.winFirstPlayer();
const win2 = () => score.winSecondPlayer();
</script>

<template>
  <Header :score="score" />
  <button @click="win1">Win1</button>
  <button @click="win2">Win2</button>
  <GameField />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
