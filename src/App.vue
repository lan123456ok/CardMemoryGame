<template>
  <main-screen
    v-if="statusMatch === 'default'"
    @onStart="onHandleBeforeStart($event)"
  >
  </main-screen>
  <interact-screen
    v-if="statusMatch === 'playing'"
    :cardsContext="settings.cardsContext"
    @onFinish="onGetResult()"
  ></interact-screen>
  <result-screen
    v-if="statusMatch === 'result'"
    :timePlaying="timePlaying"
    @onStartAgain="statusMatch = 'default'"
  ></result-screen>
</template>

<script>
import MainScreen from "@/components/MainScreen.vue";
import InteractScreen from "@/components/InteractScreen.vue";
import { shuffled } from "./utils/array";
import ResultScreen from "./components/ResultScreen.vue";

export default {
  name: "App",
  components: {
    MainScreen,
    InteractScreen,
    ResultScreen,
  },
  data() {
    return {
      settings: {
        totalOfCards: 0,
        cardsContext: [],
        startedAt: null,
      },
      statusMatch: "default",
      timePlaying: 0,
    };
  },
  methods: {
    onHandleBeforeStart(config) {
      console.log("running test ...", config);
      this.settings.totalOfCards = config.totalOfCard;

      const firstCardsArray = Array.from(
        { length: this.settings.totalOfCards / 2 },
        (_, i) => i + 1
      );
      const secondCardsArray = [...firstCardsArray];
      const cards = [...firstCardsArray, ...secondCardsArray];
      this.settings.cardsContext = shuffled(shuffled(shuffled(cards)));
      // Time
      this.settings.startedAt = new Date().getTime();
      //data ready
      this.statusMatch = "playing";
    },
    onGetResult() {
      // get time
      this.timePlaying = new Date().getTime() - this.settings.startedAt;

      //Switch to result component
      this.statusMatch = "result";
    },
  },
};
</script>
