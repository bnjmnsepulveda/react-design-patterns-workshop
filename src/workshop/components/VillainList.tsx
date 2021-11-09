import React from 'react';
import WithVillains from '../high-order-components/WithVillains';
import Title from './Title';
import VillainRow from './VillainRow';

function VillainList({ villains }) {

    //const api = useHeroAPI()

    return (
        <div>
            <Title title={'Funny Villians'} />
            {villains.map(villain => <VillainRow key={villain.name} villain={villain} />)}
        </div>
    )
}

export default WithVillains(VillainList)
