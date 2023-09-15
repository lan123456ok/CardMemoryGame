<template>
  <div class="screen"></div>
  <h1>Playing</h1>
  <card-flip
    v-for="(card, index) in cardsContext"
    :key="index"
    :imageBehindFaceUrl="`images/${card}.png`"
  ></card-flip>
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
};
</script>
