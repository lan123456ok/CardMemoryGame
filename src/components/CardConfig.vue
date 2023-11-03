<template>
  <div
    class="card"
    :class="{ disabled: isDisabled }"
    :style="{
      height: `${(920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16}px`,
      width: `${
        (((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4
      }px`,
      perspective: `${
        ((((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4) * 2
      }px`,
    }"
  >
    <div
      class="card-inner"
      :class="{ 'is-flipped': isFlipped }"
      @click="onToggleFlipCard"
    >
      <div class="card-face card-face-front">
        <div
          class="card-content"
          :style="{
            backgroundSize: `${
              (((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) /
              4 /
              2
            }px 
          ${
            (((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4 / 2
          }px`,
          }"
        >
          <!-- <p class="title-card-front">Taimanin</p> -->
        </div>
      </div>
      <div class="card-face card-face-behind">
        <div
          class="card-content"
          :style="{
            backgroundImage: `url(${require('@/assets/' +
              imageBehindFaceUrl)})`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: [String, Number, Array, Object],
    },
    imageBehindFaceUrl: {
      type: String,
      required: true,
    },
    cardsContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      isFlipped: false,
      isDisabled: false,
    };
  },
  methods: {
    onToggleFlipCard() {
      if (this.isDisabled) return false;
      this.isFlipped = !this.isFlipped;
      if (this.isFlipped) {
        this.$emit("onFlip", this.card);
      }
    },
    onFlipBackCard() {
      this.isFlipped = false;
    },
    onEnableDisabled() {
      this.isDisabled = true;
    },
  },
};
</script>

<style lang="css" scoped>
.card {
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
  /* width: 110px;
  height: 160px; */
}

.card-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.75s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}
.card-inner.is-flipped {
  transform: rotateY(-180deg);
}
.card.disabled .card-inner {
  cursor: default;
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.2);
}
.card-face.card-face-front {
  padding: 1rem;
}
.title-card-front {
  font-size: 1.2rem;
  margin-top: 36px;
}
.card-face-front .card-content {
  background: url("../assets/images/icon_back_2.png") no-repeat center center;
  /* background-size: 80px 80px; */
  height: 100%;
  width: 100%;
}

.card-face-behind {
  /* background-color: var(--light); */
  transform: rotateY(-180deg);
}
.card-face-behind .card-content {
  background-size: 300px;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}
</style>
