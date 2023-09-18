<template>
  <div class="screen">
    <h1>FLIP CARD TAIMANIN</h1>
    <h3>Select mode to start the game</h3>
    <div class="action">
      <button @click="onStart(16)" class="">
        <span>4x4</span>
        <span>Easy</span>
      </button>
      <button @click="onStart(36)" class="">
        <span>6x6</span>
        <span>Normal</span>
      </button>
      <button @click="onStart(64)" class="">
        <span>8x8</span>
        <span>Hard</span>
      </button>
      <button @click="onStart(100)" class="">
        <span>10x10</span>
        <span>Hell</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onStart(totalOfCard) {
      this.$emit("onStart", { totalOfCard });
    },
  },
};
</script>
