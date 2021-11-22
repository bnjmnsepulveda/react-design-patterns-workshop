import React from 'react';
import useHeroAPI from '../hooks/implementation/useHeroAPI';
import HeroRow from './HeroRow';
import Title from './Title';
import List from '@mui/material/List';
import Loading from './Loading';
import ErrorPanel from './ErrorPanel';
import UniverseInput from './UniverseInput';
import useUniverses from '../hooks/implementation/useUniverses';

export default function HeroList() {

    const api = useHeroAPI()
    const universes = useUniverses()

    if (api.loading) {
        return <Loading />
    }
    if (api.error) {
        return <ErrorPanel message={'Heroes could not be shown'} />
    }
    return (
        <div>
            <Title title={'Boring Heroes'} />
            <UniverseInput universes={universes} />
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {api.response.map(hero => <HeroRow key={hero.name} hero={hero} />)}
            </List>
        </div>
    )
}
