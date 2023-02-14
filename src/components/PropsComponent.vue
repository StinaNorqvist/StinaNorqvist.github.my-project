<script>
  export default {
    // 3. RECIVE MY PROPS FROM THE PROPSVUE FILE
    props: {
      fishies: {
        type: Array,
        required: true
      }
    }
  }
</script>

<template>
  <ul>
    <!-- 4. SHOW MY PROPS THAT I HAVE RECIEVED -->
    <h1 :key="fish" v-for="fish in fishies">
      <h3>{{ fish.name }}</h3>
      <h5>{{ fish.fishsort }}</h5>
    </h1>
  </ul>
</template>
