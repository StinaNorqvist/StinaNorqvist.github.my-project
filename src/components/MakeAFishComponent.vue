<script>
  export default {
    data() {
      return {
        name: '',
        age: '',
        color: '',
        newName: '',
        newAge: '',
        newColor: ''
      }
    },

    // CUSTOM EVENT AND SHOW NEW FISH
    emits: ['create-fish'],
    methods: {
      onStart() {
        this.$emit('create-fish')

        //IF NAME IS NOT AN EMPTY STRING, AND AGE IS MORE THAN 0, AND COLOR IS NOT AN EMPTY STRING = OK SHOW RESULTS, ELSE SHOW MY OWN DEFAULT NAMES
        if (this.name !== '' && this.age > 0 && this.color !== '') {
          this.newName = this.name
          this.newAge = this.age
          this.newColor = this.color
        } else {
          this.newName = 'An anonomous fish'
          this.newAge = 'An ageless fish'
          this.newColor = 'A very gray and sad fish :('
        }
      }
    }
  }
</script>

<!-- STYLE MED SCSS -->
<style lang="scss">
  $my-blue: #1f2d9e;

  p {
    color: $my-blue;
  }
</style>

<template>
  <h1>Make a Fish!</h1>
  <input class="form-control" v-model="name" type="text" placeholder="Name" />
  <input class="form-control" v-model="age" type="text" placeholder="Age" />
  <input class="form-control" v-model="color" type="text" placeholder="Color" />
  <input
    class="btn btn-outline-green"
    type="button"
    value="Create My Fish!"
    @click="onStart"
  />

  <p>Name: {{ newName }}</p>
  <p>Age: {{ newAge }}</p>
  <p>Color: {{ newColor }}</p>
  <link href="/assets/main.scss" rel="stylesheet" />
</template>
