import React from 'react'

export default function VillainRow({ villain }) {
    return (
        <div>
            <p>{villain.universe}</p>
            <span>{villain.name}</span>
            <span>{villain.power}</span>
            <span>{villain.heroEnemy}</span>
            <hr></hr>
        </div>
    )
}