<template>
  <div class="screen">
    <h1>FLIP CARD TAIMANIN</h1>
    <h3>Select mode to start the game</h3>
    <div class="modes">
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

<style lang="css" scoped>
.screen {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
}

.screen h1 {
  font-size: 4.5rem;
  text-transform: uppercase;
}

.screen p {
  font-size: 2rem;
}

.modes {
  display: flex;
  margin-top: 2rem;
}

.modes button {
  font: var(--font);
  width: 150px;
  height: 150px;
  background: transparent;
  box-shadow: none;
  border: 1px solid var(--light);
  color: var(--light);
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  margin: 0 1rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.modes button:hover {
  background-color: var(--light);
  color: var(--dark);
}

.modes button span:first-child {
  font-size: 2rem;
}

.modes button span:last-child {
  display: block;
  font-size: 1.25rem;
  margin-top: 0.5rem;
}
</style>
