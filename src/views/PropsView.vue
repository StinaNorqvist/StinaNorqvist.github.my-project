<script>
  import PropsComponent from '../components/PropsComponent.vue'

  export default {
    components: {
      PropsComponent
    },

    // 1. CREATED DATA TO SEND AWAY IN A PROP
    data() {
      return {
        fishies: [
          { name: 'Berit', fishsort: 'Salmon' },
          { name: 'Bengt', fishsort: 'Sardine' },
          { name: 'Bertil', fishsort: 'Tuna' },
          { name: 'Hans', fishsort: 'Bass' },
          { name: 'Håkan', fishsort: 'Cod' },
          { name: 'Camilla', fishsort: 'Catfish' },
          { name: 'Rune', fishsort: 'Goldfish' }
        ]
      }
    }
  }
</script>

<template>
  <!-- 2. SEND MY PROP TO MY PROPSCOMPONENT-->
  <PropsComponent :fishies="fishies" />
</template>
