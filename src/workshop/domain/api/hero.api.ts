import axios from 'axios';
import { API_URL } from './../config/contants';
import { Hero } from "../model/hero.model"


export async function findHeroesByParams(params: Partial<Hero>): Promise<Hero[]> {
    return await axios
        .get(`${API_URL}/heroes`, { params })
        .then(response => response.data)
}

export async function findUniverses(): Promise<string[]> {
    return await axios
        .get(`${API_URL}/heroes`)
        .then(response => response.data)
        .then(heroes => heroes.map(hero => hero.universe))
        .then(universes => universes.filter((n, i) => universes.indexOf(n) === i))
}