<!-- IMPORTING THE BUTTON COMPONENTS -->
<script>
  import AddButtonComponent from '../components/AddButtonComponent.vue'
  import RemoveButtonComponent from '../components/RemoveButtonComponent.vue'

  export default {
    components: {
      AddButtonComponent,
      RemoveButtonComponent
    }
  }
</script>

<template>
  <h1>Welcome to the fish store!</h1>
  <h2>Click on the fish that you want to add to your aquarium!</h2>

  <h1>{{ $store.state.fishtypes.octopus.picture }}</h1>
  <AddButtonComponent />
  <RemoveButtonComponent />

  <h1>{{ $store.state.fishtypes.coralfish.picture }}</h1>
  <AddButtonComponent />
  <RemoveButtonComponent />

  <h1>{{ $store.state.fishtypes.bluefish.picture }}</h1>
  <AddButtonComponent />
  <RemoveButtonComponent />

  <h1>{{ $store.state.fishtypes.blowfish.picture }}</h1>
  <AddButtonComponent />
  <RemoveButtonComponent />

  <h1>{{ $store.state.fishtypes.shrimp.picture }}</h1>
  <AddButtonComponent />
  <RemoveButtonComponent />

  <h2>Total fish in your aquarium</h2>
  <h1>{{ $store.state.fishies }} Fishies</h1>

  <link href="/assets/main.scss" rel="stylesheet" />
</template>
