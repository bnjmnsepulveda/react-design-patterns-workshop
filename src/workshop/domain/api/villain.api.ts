import { Villain } from './../model/villain.model';
import axios from 'axios';
import { API_URL } from '../config/contants';


export async function findVillainsByParams(params: Partial<Villain>): Promise<Villain[]> {
    return await axios
        .get(`${API_URL}/villains`, { params })
        .then(response => response.data)
}
