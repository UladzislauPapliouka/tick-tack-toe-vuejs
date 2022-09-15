import { defineStore } from "pinia";
import { useGameScore } from "@/stores/score";

export enum GameMarkers {
  CROSS = "CROSS",
  CIRCLE = "CIRCLE"
}

const defaultMap = [
  { id: 0, marker: "" }, { id: 1, marker: "" }, { id: 2, marker: "" },
  { id: 3, marker: "" }, { id: 4, marker: "" }, { id: 5, marker: "" },
  { id: 6, marker: "" }, { id: 7, marker: "" }, { id: 8, marker: "" }
];
export const useGameState = defineStore("gameState", {
  state() {
    return {
      nextMarker: GameMarkers.CROSS,
      gameMap: [
        { id: 0, marker: "" }, { id: 1, marker: "" }, { id: 2, marker: "" },
        { id: 3, marker: "" }, { id: 4, marker: "" }, { id: 5, marker: "" },
        { id: 6, marker: "" }, { id: 7, marker: "" }, { id: 8, marker: "" }
      ]
    };
  },
  actions: {
    swapMarker() {
      this.nextMarker = this.nextMarker === GameMarkers.CROSS ? GameMarkers.CIRCLE : GameMarkers.CROSS;
    },
    setClickedField(fieldId: number) {
      this.gameMap[fieldId].marker = this.nextMarker;
      this.swapMarker();
      this.checkWin();
    },
    resetMap(winnerMarker: GameMarkers.CROSS | GameMarkers.CIRCLE) {
      for (let i = 0; i <= defaultMap.length - 1; i++) {
        this.gameMap[i].marker = "";
      }
      useGameScore().gameWin(winnerMarker);
    },
    checkWin() {
      if (this.gameMap[0].marker !== "" && this.gameMap[0].marker === this.gameMap[1].marker && this.gameMap[0].marker === this.gameMap[2].marker) {
        this.resetMap(this.gameMap[0].marker === GameMarkers.CROSS ? GameMarkers.CROSS : GameMarkers.CIRCLE);
      } else if (this.gameMap[3].marker !== "" && this.gameMap[3].marker === this.gameMap[4].marker && this.gameMap[3].marker === this.gameMap[5].marker) {
        this.resetMap(this.gameMap[0].marker === GameMarkers.CROSS ? GameMarkers.CROSS : GameMarkers.CIRCLE);
      } else if (this.gameMap[6].marker !== "" && this.gameMap[6].marker === this.gameMap[7].marker && this.gameMap[6].marker === this.gameMap[8].marker) {
        this.resetMap(this.gameMap[0].marker === GameMarkers.CROSS ? GameMarkers.CROSS : GameMarkers.CIRCLE);
      } else if (this.gameMap[0].marker !== "" && this.gameMap[0].marker === this.gameMap[3].marker && this.gameMap[0].marker === this.gameMap[6].marker) {
        this.resetMap(this.gameMap[0].marker === GameMarkers.CROSS ? GameMarkers.CROSS : GameMarkers.CIRCLE);
      } else if (this.gameMap[1].marker !== "" && this.gameMap[1].marker === this.gameMap[4].marker && this.gameMap[1].marker === this.gameMap[7].marker) {
        this.resetMap(this.gameMap[0].marker === GameMarkers.CROSS ? GameMarkers.CROSS : GameMarkers.CIRCLE);
      } else if (this.gameMap[2].marker !== "" && this.gameMap[2].marker === this.gameMap[5].marker && this.gameMap[2].marker === this.gameMap[8].marker) {
        this.resetMap(this.gameMap[0].marker === GameMarkers.CROSS ? GameMarkers.CROSS : GameMarkers.CIRCLE);
      } else if (this.gameMap[4].marker !== "" && this.gameMap[0].marker === this.gameMap[4].marker && this.gameMap[0].marker === this.gameMap[8].marker) {
        this.resetMap(this.gameMap[0].marker === GameMarkers.CROSS ? GameMarkers.CROSS : GameMarkers.CIRCLE);
      } else if (this.gameMap[2].marker !== "" && this.gameMap[2].marker === this.gameMap[4].marker && this.gameMap[2].marker === this.gameMap[6].marker) {
        this.resetMap(this.gameMap[0].marker === GameMarkers.CROSS ? GameMarkers.CROSS : GameMarkers.CIRCLE);
      }
    }
  }
});