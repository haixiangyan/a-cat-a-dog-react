import axios, {AxiosInstance} from 'axios';
import { catKey, dogKey } from "./secret"

const catAxios: AxiosInstance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'x-api-key': catKey
  }
});
const dogAxios: AxiosInstance = axios.create({
  baseURL: 'https://api.thedogapi.com/v1',
  headers: {
    'x-api-key': dogKey
  }
});

export {
  catAxios,
  dogAxios
}
