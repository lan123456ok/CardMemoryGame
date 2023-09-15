<template>
  <main-screen
      v-if="statusMatch === 'default'"
      @onStart="onHandleBeforeStart($event)">
  </main-screen>
  <interact-screen v-if="statusMatch === 'playing'"></interact-screen>
</template>

<script>
import MainScreen from "@/components/MainScreen.vue";
import InteractScreen from "@/components/InteractScreen.vue";

export default {
  name: "App",
  data() {
    return {
      settings: {
        totalOfCards: 0,
        cardContext: [],
      },
      statusMatch: "default",
    };
  },
  components: {
    MainScreen,
    InteractScreen,
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
      console.log(cards);
      //data ready
      this.statusMatch = "playing";
    },
  },
};
</script>
