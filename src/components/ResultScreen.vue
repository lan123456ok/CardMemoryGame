<template>
    <div class="screen">
        <h1>✨ Congratulations ✨</h1>
        <p>{{ Math.round(timePlaying/1000) }} seconds</p>
        <button @click="onStartAgain">Start again</button>
    </div>
</template>

<script>
export default {
    props: {
        timePlaying: {
            type: Number,
            required: true,
        },
    },
    methods: {
        onStartAgain() {
            this.$emit("onStartAgain");
        }
    },
}
</script>
