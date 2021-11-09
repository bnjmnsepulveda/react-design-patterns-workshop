import React from 'react'
import Title from './Title';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import { Box, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


export default function HeroRow({ hero }) {

    return (
        <ListItem>
            <ListItemAvatar >
                <HeroAvatar hero={hero} />
            </ListItemAvatar>
            <ListItemText primary={<Primary hero={hero} />} secondary={<Secondary hero={hero} />} />
        </ListItem>
    )
}

function Primary({ hero }) {
    return (
        <Typography sx={{ pl: 2 }} variant="h6" gutterBottom component="div">
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

function PropertyDescription({ name, description }) {

    return (
        <React.Fragment>
            <Typography variant="subtitle2" gutterBottom component="span">
                {name}
            </Typography>
            <Typography variant="body2" gutterBottom component="span">
                {description}
            </Typography>
        </React.Fragment>
    )

}

function Secondary({ hero }) {
    return (
        <Box sx={{ pl: 2 }}>
            <ListItemText primary={<PropertyDescription name={'Power:'} description={hero.power} />} />
            <ListItemText primary={<PropertyDescription name={'Enemy :'} description={hero.villainEnemy} />} />
        </Box>
    )
}