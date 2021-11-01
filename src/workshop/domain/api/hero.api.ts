import axios from 'axios';
import { API_URL } from './../config/contants';
import { Hero } from "../model/hero.model"

export interface HeroParams {
    name?: string;
    universe?: string;
    power?: string;
}

const api = {

    async findByParams(params: HeroParams): Promise<Hero[]> {
        return await axios
            .get(`${API_URL}/heroes`, { params })
            .then(response => response.data)
    }

}

export default api