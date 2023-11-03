<template>
  <div class="screen">
    <div
      class="screen-inner"
      :style="{
        width: `${
          ((((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4 +
            16) *
          Math.sqrt(cardsContext.length)
        }px`,
      }"
    >
      <card-flip
        v-for="(card, index) in cardsContext"
        :key="index"
        :ref="`card-${index}`"
        :imageBehindFaceUrl="`images/${card}.png`"
        :card="{ index, value: card }"
        @onFlip="checkRule($event)"
        :cardsContext="cardsContext"
      ></card-flip>
    </div>
  </div>
</template>

<script>
import CardFlip from "@/components/CardConfig.vue";

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
      // console.log(this.$refs[`card-${this.rules[0].index}`][0].card.index);
      // console.log(this.$refs[`card-${this.rules[1].index}`][0].card.index);

      if (
        this.rules.length === 2 &&
        this.rules[0].value === this.rules[1].value
      ) {
        // check if has duplicate index
        if (
          this.$refs[`card-${this.rules[0].index}`][0].card.index ===
          this.$refs[`card-${this.rules[1].index}`][0].card.index
        ) {
          setTimeout(() => {
            this.$refs[`card-${this.rules[1].index}`][0].onFlipBackCard();
            this.rules = [];
          }, 800);
        } else {
          // console.log("right");
          // two card is disabled
          this.$refs[`card-${this.rules[0].index}`][0].onEnableDisabled();
          this.$refs[`card-${this.rules[1].index}`][0].onEnableDisabled();
          // reset rule aray
          this.rules = [];

          // the right pair
          const disableElements = document.querySelectorAll(
            ".screen .card.disabled"
          );
          if (
            disableElements &&
            disableElements.length === this.cardsContext.length - 2
          ) {
            setTimeout(() => {
              this.$emit("onFinish");
            }, 920);
          }
        }
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value
      ) {
        // console.log("fail");
        setTimeout(() => {
          //temp de nho tam
          let temp = [...this.rules];
          console.log("temp", temp);
          let index0 = this.rules[0].index;
          let index1 = this.rules[1].index;
          this.rules = [];
          // close two card
          this.$refs[`card-${index0}`][0].onFlipBackCard();
          this.$refs[`card-${index1}`][0].onFlipBackCard();
          // reset temp array
          this.temp = [];
        }, 800);
      } else return false;
    },
  },
};
</script>

<style lang="css" scoped>
.screen {
  width: 100%;
  height: fit-content;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: var(--dark);
  color: var(--light);
}

.screen-inner {
  /* width: 506px; */
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
}
</style>
