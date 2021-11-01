import React from 'react'
import useVillainAPI from '../hooks/implementation/useVillainAPI';


function WithVillains(Component) {

    return function WrapperApi(props) {

        const api = useVillainAPI()

        if (api.loading) {
            return <h2>Loading data...</h2>
        }

        if (api.error) {
            return <h2>Error loading villains {api.error.message}</h2>
        }

        return <Component villains={api.villains} {...props} />

    }

}

export default WithVillains