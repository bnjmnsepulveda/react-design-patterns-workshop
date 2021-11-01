import villainApi from '../../domain/api/villain.api'
import { Villain } from '../../domain/model/villain.model'
import useAPI from '../template-method/useAPI'


export default function useVillainAPI() {

    return useAPI<Partial<Villain>, Villain[]>({
        callback: villainApi.findByParams,
        default: {
            params: {},
            response: []
        }
    })

}