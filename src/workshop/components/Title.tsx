import * as React from 'react';
import { Typography } from '@mui/material';

export default function Tittle({ title }) {
    return <Typography variant="h2" component="div" gutterBottom>
        {title}
    </Typography>
}