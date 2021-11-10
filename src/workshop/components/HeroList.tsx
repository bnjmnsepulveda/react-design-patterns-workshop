import React from 'react';
import { Typography } from '@mui/material';
import useHeroAPI from '../hooks/implementation/useHeroAPI';
import HeroRow from './HeroRow';
import Title from './Title';
import List from '@mui/material/List';

export default function HeroList() {

    const api = useHeroAPI()

    if (api.loading) {
        return <h2>Loading data...</h2>
    }
    if (api.error) {
        return <h2>Error loading heores {api.error.message}</h2>
    }
    return (
        <div>
            <Title title={'Boring Heroes'} />
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {api.response.map(hero => <HeroRow key={hero.name} hero={hero} />)}
            </List>
        </div>
    )
}
