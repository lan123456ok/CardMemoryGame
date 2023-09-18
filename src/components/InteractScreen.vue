<template>
  <div class="screen"></div>
  <h1>Playing</h1>
  <card-flip v-for="(card, index) in cardsContext" :key="index" :ref="`card-${index}`"
    :imageBehindFaceUrl="`images/${card}.png`" :card="{ index, value: card }" @onFlip="checkRule($event)"></card-flip>
</template>

<script>
import CardFlip from "@/components/Card.vue";

export default {
  props: {
    cardsContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  components: {
    CardFlip,
  },
  data() {
    return {
      rules: [],
    };
  },
  methods: {
    checkRule(card) {
      if (this.rules.length === 2) return false;

      this.rules.push(card);
      console.log("flip card ...");

      if (
        this.rules.length === 2 &&
        this.rules[0].value === this.rules[1].value
      ) {
        console.log("right");
        // two card is disabled
        this.$refs[`card-${this.rules[0].index}`][0].onEnableDisabled();
          this.$refs[`card-${this.rules[1].index}`][0].onEnableDisabled();
        // reset rule aray
        this.rules = [];
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value
      ) {
        console.log("fail");
        setTimeout(() => {
          // close two card
          this.$refs[`card-${this.rules[0].index}`][0].onFlipBackCard();
          this.$refs[`card-${this.rules[1].index}`][0].onFlipBackCard();
          // reset rule array
          this.rules = [];
        }, 800);
      } else return false;
    },
  },
};
</script>
