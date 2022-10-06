<script lang="ts">
export default {
  props: {
    score: {
      user1: Number,
      user2: Number,
      required: true,
    },
  },
};
</script>

<template>
  <div :class="$style.header">
    <span :class="$style.scoreSpan">{{
      `${score.user1} : ${score.user2}`
    }}</span>
  </div>
</template>

<style module>
.header {
  position: relative;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 40px;
  background: #ffffff;
  -webkit-box-shadow: 0 10px 14px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 10px 14px 0 rgba(34, 60, 80, 0.2);
  box-shadow: 0 10px 14px 0 rgba(34, 60, 80, 0.2);
  z-index: 2;
}

.scoreSpan {
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 60px;
  background: linear-gradient(
    90deg,
    rgba(133, 249, 178, 1) 0%,
    rgba(151, 206, 230, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
