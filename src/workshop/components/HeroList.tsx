import React from 'react';
import useHeroAPI from '../hooks/implementation/useHeroAPI';
import HeroRow from './HeroRow';

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
            <h1>Heroes list</h1>
            {api.response.map(hero => <HeroRow hero={hero} />)}
        </div>
    )
}
