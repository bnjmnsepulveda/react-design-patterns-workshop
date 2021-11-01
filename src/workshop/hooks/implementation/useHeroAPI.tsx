import heroApi, { HeroParams } from '../../domain/api/hero.api'
import { Hero } from '../../domain/model/hero.model'
import useAPI from '../template-method/useAPI'


export default function useHeroAPI() {
    return useAPI<HeroParams, Hero[]>({
        callback: heroApi.findByParams,
        default: {
            params: {
                universe: 'dragonball'
            },
            response: []
        }
    })
}