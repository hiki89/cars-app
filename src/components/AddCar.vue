<template>
    <div>  
    <div class="container mt-4">
    <form @submit.prevent="onSubmit">
        <div class="form-group row">
        <label for="brand" class="col-4 col-form-label">Brand</label>
        <div class="col-8">
            <div class="input-group">
            <input id="brand" name="brand" type="text" required="required" class="form-control here" v-model="car.brand">
            </div>
        </div>
        </div>
        <div class="form-group row">
        <label for="model" class="col-4 col-form-label">Model</label>
        <div class="col-8">
            <div class="input-group">
            <input id="model" name="model" type="text" required="required" class="form-control here" v-model="car.model">
            </div>
        </div>
        </div>
        <div class="form-group row">
        <label for="year" class="col-4 col-form-label">Year</label>
        <div class="col-8">
            <select v-model="car.year">
                <option v-for="(year, index) in years()" :key="index" :value="year">{{ year }}</option>
            </select>
        </div>
        </div>
        <div class="form-group row">
        <label for="isAutomatic" class="col-4 col-form-label">Automatic</label>
        <div class="col-8">
            <div class="input-group">
            <input id="isAutomatic" name="isAutomatic" type="checkbox" class="form-control here" v-model="car.isAutomatic">
            </div>
        </div>
        </div>
        <div class="form-group row">
        <label for="maxSpeed" class="col-4 col-form-label">Max speed</label>
        <div class="col-8">
            <div class="input-group">
            <input id="maxSpeed" name="maxSpeed" type="number" required="required" class="form-control here" v-model="car.maxSpeed">
            </div>
        </div>
        </div>
        <div class="form-group row">
        <label for="engine" class="col-4 col-form-label">Engine</label>
        <div class="col-8">
            <div class="input-group">
            <input id="engine" name="engine" type="text" required="required" class="form-control here" v-model="car.engine">
            </div>
        </div>
        </div>
        <div class="form-group row">
        <label for="numberOfDoors" class="col-4 col-form-label">Number of doors</label>
        <div class="col-8">
            <div class="input-group">
            <input id="numberOfDoors" name="numberOfDoors" type="number" required="required" class="form-control here" v-model="car.numberOfDoors">
            </div>
        </div>
        </div>
        
        <div class="form-group row">
        <div class="offset-4 col-8">
            <button name="submit" type="submit" class="btn btn-primary">Submit</button>
        </div>
        </div>
        <div class="form-group row">
        <div class="offset-4 col-8">
            <button name="reset" type="reset" class="btn btn-primary">Reset</button>
        </div>
        </div>
        
    </form>
    </div>
    </div>
</template>

<script>
import { cars } from '../services/Cars'

export default {
    data() {
        return {
            car: {
                brand: '',
                model: '',
                year: null,
                isAutomatic: false,
                maxSpeed: null,
                engine: '',
                numberOfDoors: null
            },
        }
    },

    methods: {
        onSubmit() {
            this.addCar()
        },

        addCar() {
            cars.addCar(this.car)
            .then(response => {
                this.$router.push('/cars')    
            })
            .catch(response => {
                console.log(response)
            })
        },

        years() {
            let year = []
            let i
            for (i = 1900; i < 2019; i++) { 
                year.push(i);
            }
            return year;
        }
    }
}
</script>

