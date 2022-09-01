<script setup lang="ts">
import Header from "./components/Header.vue"
import {useGameScore} from "@/stores/score";

const score = useGameScore();
const win1 = () => score.winFirstPlayer()
const win2 = () => score.winSecondPlayer()
</script>

<template>
  <Header :score="score"/>
  <button @click="win1">Win1</button>
  <button @click="win2">Win2</button>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
