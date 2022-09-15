<template>
  <div :class="$style.gameField">
    <ClickableField v-for="item in gameMap" :type="item.marker" @click="()=>{
      !item.marker.trim() && onCLickHandeler(item.id)
    }"/>
  </div>
</template>

<style module>
.gameField {
  height: 600px;
  width: 600px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
}
</style>
<script>
import ClickableField from "./ClickableField.vue"
import { useGameState } from "@/stores/gameState";
export default {
  data(){
    return {
      gameMap: useGameState().gameMap
    }
  },
  methods: {
    onCLickHandeler: function(fieldId){
      useGameState().setClickedField(fieldId)
    }
  },
  components: { ClickableField },
};
</script>
