<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        fishies: null
      }
    },

    methods: {
      onClick() {
        axios('https://www.fishwatch.gov/api/species').then((result) => {
          console.log('You just caught some fish!')
          this.fishies = result.data
          console.log(result)
        })
      }
    }
  }
</script>

<template>
  <button class="btn btn-outline-green" @click="onClick">
    Click here to catch some fish!
  </button>

  <!-- LIST WITH FISH -->
  <ul>
    <li :key="fish['Species Name']" v-for="fish in fishies">
      {{ fish['Species Name'] }}

      <!-- ROUTER LINK TO THE FISHIES -->
      <RouterLink :to="'/FishListView/' + fish['Species Name']">
        <input type="button" value="I want to know more about this fish!" />
      </RouterLink>

      <img :src="fish['Species Illustration Photo'].src" alt="Fish Image" />
    </li>
  </ul>
  <link href="/assets/main.scss" rel="stylesheet" />
</template>

<style>
  img {
    width: 14rem;
  }

  ul {
    list-style: none;
    text-align: center;
  }
</style>
