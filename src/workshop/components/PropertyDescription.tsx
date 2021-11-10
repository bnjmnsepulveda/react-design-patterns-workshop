import React from 'react'
import { Typography } from '@mui/material'

export default function PropertyDescription({ name, description }) {
    return (
        <React.Fragment>
            <Typography sx={{ display: 'inline-block', width: 100, fontWeight: 'bold' }} variant="subtitle2" gutterBottom component="span">
                {name}
            </Typography>
            <Typography variant="body2" gutterBottom component="span">
                {description}
            </Typography>
        </React.Fragment>
    )

}