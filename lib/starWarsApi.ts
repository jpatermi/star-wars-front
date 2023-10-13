import axios from 'axios';

const starWarsApi = axios.create({
  // baseURL: 'https://swapi.dev/api' // Direct to API
  baseURL: 'http://localhost:3008/api/star-wars' // Through the back end
});

export default starWarsApi;