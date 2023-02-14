<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        fishies: null
      }
    },
    created() {
      axios(
        `https://www.fishwatch.gov/api/species/${this.$route.params.randomFish}`
      ).then((result) => {
        console.log('You just caught a fish!')
        this.fishies = result.data[0]
        console.log(result)
      })
    }
  }
</script>

<template>
  <!-- WHEN MY AXIOS IS DONE, AND FISHIES IS NOT NULL, SHOW DATA ON PAGE, THAT'S WHY V-IF -->
  <div v-if="fishies">
    <h1>{{ fishies['Species Name'] }}</h1>
    <img :src="fishies['Species Illustration Photo'].src" alt="Fish Image" />
    <p>About: {{ fishies['Quote'] }}</p>
    <p>Population: {{ fishies['Population'] }}</p>
    <p>Habitat Impacts: {{ fishies['Habitat Impacts'] }}</p>
    <p>Harvest Type: {{ fishies['Harvest Type'] }}</p>
    <p>NOAA Fisheries Region: {{ fishies['NOAA Fisheries Region'] }}</p>
    <p>Fishing Rate: {{ fishies['Fishing Rate'] }}</p>
  </div>
</template>
