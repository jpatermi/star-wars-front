import axios from 'axios';

const starWarsApi = axios.create({
  baseURL: 'https://swapi.dev/api'
  // baseURL: 'http://localhost:3008/api/star-wars'
});

export default starWarsApi;