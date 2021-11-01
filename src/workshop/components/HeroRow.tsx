import React from 'react'

export default function HeroRow({ hero }) {
    return (
        <div>
            <p>{hero.universe}</p>
            <span>{hero.name}</span>
            <span>{hero.power}</span>
            <span>{hero.villainEnemy}</span>
            <hr></hr>
        </div>
    )
}