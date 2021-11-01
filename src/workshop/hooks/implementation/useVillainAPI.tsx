import { findVillainsByParams } from '../../domain/api/villain.api'
import { Villain } from '../../domain/model/villain.model'
import useAPI from '../template-method/useAPI'


export default function useVillainAPI() {

    const api = useAPI<Partial<Villain>, Villain[]>({
        callback: findVillainsByParams,
        default: {
            params: {},
            response: []
        }
    })
    return {
        loading: api.loading,
        error: api.error,
        villains: api.response,
        request: api.request
    }
}