import React from 'react';
import WithVillains from '../high-order-components/WithVillains';
import VillainRow from './VillainRow';

function VillainList({ villains }) {

    //const api = useHeroAPI()

    return (
        <div>
            <h1>Villain list</h1>
            {villains.map(villain => <VillainRow key={villain.name} villain={villain} />)}
        </div>
    )
}

export default WithVillains(VillainList)
