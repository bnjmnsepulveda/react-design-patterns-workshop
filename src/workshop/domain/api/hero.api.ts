import axios from 'axios';
import { API_URL } from './../config/contants';
import { Hero } from "../model/hero.model"


export async function findHeroesByParams(params: Partial<Hero>): Promise<Hero[]> {
    return await axios
        .get(`${API_URL}/heroes`, { params })
        .then(response => response.data)
}