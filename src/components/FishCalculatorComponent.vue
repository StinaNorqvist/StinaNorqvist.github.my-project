<script>
  export default {
    data() {
      return {
        oldFish: null,
        newFish: null
      }
    },

    computed: {
      totalFish() {
        return this.oldFish + this.newFish
      }
    },

    watch: {
      oldFish(of) {
        console.log(of)
      },
      newFish(nf) {
        console.log(nf)
      }
    }
  }
</script>

<template>
  <h1>Fish Calculator</h1>

  <h3>How many fish do you have right now?</h3>
  <input v-model="oldFish" type="number" />
  <h3>How many fish do you plan to catch?</h3>
  <input v-model="newFish" type="number" />
  <h1>You are going to have {{ totalFish }} fish!</h1>

  <h3 v-if="totalFish < 0">Maybe you should find another hobby...</h3>
  <h3 v-if="totalFish > 7">Wow! That's a lot of fish!</h3>

  <p>This is a watcher: {{ oldFish + newFish }}</p>
  <h2>
    Don't forget that you have already added
    {{ $store.state.fishies }} fish to your aquarium!
  </h2>
  <link href="/assets/main.scss" rel="stylesheet" />
</template>
