import axios from 'axios'

export default class Cars {
  constructor () {
    axios.defaults.baseURL = 'http://localhost:3000/api/'
  }

    getAll() {
        return axios.get('cars')
    }

    get(id) {
      return axios.get(`cars/${id}`)
    }

    addCar(car) {
      return axios.post('cars', car);
    }

    editCar(car) {
      return axios.put(`cars/${car.id}`, car)
    }

}

export const cars = new Cars()
