import { findHeroesByParams } from '../../domain/api/hero.api'
import { Hero } from '../../domain/model/hero.model'
import useAPI from '../template-method/useAPI'


export default function useHeroAPI() {
    return useAPI<Partial<Hero>, Hero[]>({
        callback: findHeroesByParams,
        default: {
            params: {
                universe: 'dragonball'
            },
            response: []
        }
    })
}