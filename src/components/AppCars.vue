<template>
  <div>
      <CarsList :cars="cars" />
  </div>
</template>

<script>
import CarsList from '../components/CarsList.vue'
import { cars } from '../services/Cars'

export default {
    components: {
        CarsList
  },

  data() {
      return {
          cars: []
      }
  },

  beforeRouteEnter(to, from, next) {
      cars.getAll()
          .then((response) => {
              next((vm) => {
                  vm.cars = response.data
              })
          })
      
  } 
}
</script>