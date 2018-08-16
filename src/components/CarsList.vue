<template>
    <div>
        <ul class="list-group list-group-flush" v-for="(car, key) in cars" :key="key">
            <li class="list-group-item">Brand: {{ car.brand }}</li>
            <li class="list-group-item">Model: {{ car.model }}</li>
            <li class="list-group-item">Year: {{ car.year }}</li>
            <li class="list-group-item">Automatic: {{ car.isAutomatic }}</li>
            <li class="list-group-item">Max Speed: {{ car.maxSpeed }}</li>
            <li class="list-group-item">Engine: {{ car.engine }}</li>
            <li class="list-group-item">Number of doors: {{ car.numberOfDoors }}</li>
            <router-link :to="{name: 'edit', params: {id: car.id}}" class="btn btn-dark">Edit</router-link>
            <button @click="deleteCar(car.id)" class="btn btn-dark">Delete</button>
        </ul>
    </div>
</template>

<script>
import { cars } from '../services/Cars'

export default {
    props: ['cars'],

    methods: {
        deleteCar(id) {
            cars.remove(id)
            this.cars.splice(this.car, 1)
        }
    }
}
</script>

<style>
.list-group {
    display: inline-block;   
    text-align: center;            
    width: 400px;
}                                          
</style>


