import { findUniverses } from '../../domain/api/hero.api'
import useAPI from '../template-method/useAPI'


export default function useUniverses() {
    const { response } = useAPI<{}, string[]>({
        callback: findUniverses,
        default: {
            params: {},
            response: []
        }
    })
    return response
}