<template>
  <div :class="$style.gameField">
    <ClickableField v-for="item in gameMap" :type="item.marker" @click="()=>{
      !item.marker.trim() && onCLickHandeler(item.id)
    }"/>
    <img :class="$style.lattice" src="src/assets/icons/Lattice.svg" alt="">
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
  align-items: center;
  justify-items: center;
  position: relative;
}
.lattice{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
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
