import * as React from 'react';
import { List } from '@mui/material';
import WithVillains from '../high-order-components/WithVillains';
import Title from './Title';
import VillainRow from './VillainRow';

function VillainList({ villains }) {

    return (
        <div>
            <Title title={'Funny Villians'} />
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {villains.map(villain => <VillainRow key={villain.name} villain={villain} />)}
            </List>
        </div>
    )
}

export default WithVillains(VillainList)
