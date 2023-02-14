<script>
  import MakeAFishComponent from '../components/MakeAFishComponent.vue'

  export default {
    components: {
      MakeAFishComponent
    },
    // CUSTOM EVENT
    methods: {
      onFishCreated() {
        alert('Good job! You have successfully created your very own fish!')
      }
    }
  }
</script>

<template>
  <MakeAFishComponent @create-fish="onFishCreated" />
</template>
