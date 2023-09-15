<template>
  <div class="card">
    <div
      class="card-inner"
      :class="{ 'is-flipped': isFlipped }"
      @click="onToggleFlipCard"
    >
      <div class="card-face card-face-front">
        <div class="card-content">Front</div>
      </div>
      <div class="card-face card-face-behind">
        <div class="card-content">Behind</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFlipped: false,
    };
  },
  methods: {
    onToggleFlipCard() {
      this.isFlipped = !this.isFlipped;
    },
  },
};
</script>

<style lang="css" scoped>
.card {
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: 110px;
  height: 160px;
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

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.2);
}
.card-face-behind {
  background-color: var(--light);
  transform: rotateY(-180deg);
}
</style>
