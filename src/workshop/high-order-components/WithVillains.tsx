import React from 'react'
import ErrorPanel from '../components/ErrorPanel';
import Loading from '../components/Loading';
import useVillainAPI from '../hooks/implementation/useVillainAPI';


function WithVillains(Component) {

    return function WrapperApi(props) {

        const api = useVillainAPI()

        if (api.loading) {
            return <Loading />
        }

        if (api.error) {
            return <ErrorPanel message={'Villains could not be shown'} />
        }

        return <Component villains={api.villains} {...props} />

    }

}

export default WithVillains