import axios from 'axios';

class ApiService{
  instance = axios.create({
    baseURL: 'https://mate-uber-eats-api.herokuapp.com/api/v1',
  })

  getRestaurants = () => this.instance
    .get('/restaurants')
    .then(res => res.data)

  getRestaurantInfo = id => this.instance.get(`/restaurants/${id}`)
    .then(res => res.data)

  getMenuItemInfo = id => this.instance.get(`menu-items/${id}`)
    .then(res => res.data)

  getLocationData = () => this.instance
    .get('/locations')
    .then(res => res.data)
}

export const apiService = new ApiService();
