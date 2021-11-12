import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import { Alert, Box, Divider, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import PropertyDescription from './PropertyDescription';


export default function HeroRow({ hero }) {

    return (
        <React.Fragment>
            <ListItem>
                <ListItemAvatar >
                    <HeroAvatar hero={hero} />
                </ListItemAvatar>
                <ListItemText primary={<Primary hero={hero} />} secondary={<Secondary hero={hero} />} />
            </ListItem>
            <Divider />
        </React.Fragment>
    )
}

function Primary({ hero }) {
    return (
        <Typography color="primary" sx={{ pl: 2 }} variant="h6" gutterBottom component="div">
            {hero.universe}
        </Typography>
    )
}

function HeroAvatar({ hero }) {
    return (
        <Stack sx={{ pl: 4, pr: 4, width: 250 }} direction="column" justifyContent="center"
            alignItems="center" spacing={1}>
            <Avatar>
                <StarIcon />
            </Avatar>
            <Typography variant="h6" gutterBottom component="div">
                {hero.name}
            </Typography>
        </Stack>
    )
}

function Secondary({ hero }) {
    return (
        <Box sx={{ pl: 2 }}>
            <Alert icon={false} severity="success">
                <ListItemText primary={<PropertyDescription name={'Power:'} description={hero.power} />} />
                <ListItemText primary={<PropertyDescription name={'Enemy :'} description={hero.villainEnemy} />} />
            </Alert>
        </Box>
    )
}