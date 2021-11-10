import React from 'react'
import Loading from '../components/Loading';
import useVillainAPI from '../hooks/implementation/useVillainAPI';


function WithVillains(Component) {

    return function WrapperApi(props) {

        const api = useVillainAPI()

        if (api.loading) {
            return <Loading />
        }

        if (api.error) {
            return <h2>Error loading villains {api.error.message}</h2>
        }

        return <Component villains={api.villains} {...props} />

    }

}

export default WithVillains