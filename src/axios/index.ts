import axios from 'axios';
import { catKey, dogKey } from "./secret"

const catAxios = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'x-api-key': catKey
  }
});
const dogAxios = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'x-api-key': dogKey
  }
});

export {
  catAxios,
  dogAxios
}
