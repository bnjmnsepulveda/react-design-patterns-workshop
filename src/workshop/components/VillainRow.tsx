import React from 'react'
import { Avatar, Box, Divider, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PropertyDescription from './PropertyDescription';
import Alert from '@mui/material/Alert';

export default function VillainRow({ villain }) {
    return (
        <React.Fragment>
            <ListItem>
                <ListItemAvatar >
                    <VillainAvatar villain={villain} />
                </ListItemAvatar>
                <ListItemText primary={<Primary villain={villain} />} secondary={<Secondary villain={villain} />} />
            </ListItem>
            <Divider />
        </React.Fragment>
    )
}


function Primary({ villain }) {
    return (
        <Typography color="primary" sx={{ pl: 2 }} variant="h6" gutterBottom component="div">
            {villain.universe}
        </Typography>
    )
}

function VillainAvatar({ villain }) {
    return (
        <Stack sx={{ pl: 4, pr: 4, width: 250 }} direction="column" justifyContent="center"
            alignItems="center" spacing={1}>
            <Avatar>
                <LocalFireDepartmentIcon />
            </Avatar>
            <Typography variant="h6" gutterBottom component="div">
                {villain.name}
            </Typography>
        </Stack>
    )
}



function Secondary({ villain }) {
    return (
        <Box sx={{ pl: 2 }}>
            <Alert icon={false} severity="success">
                <ListItemText primary={<PropertyDescription name={'Power:'} description={villain.power} />} />
                <ListItemText primary={<PropertyDescription name={'Enemy :'} description={villain.heroEnemy} />} />
            </Alert>
        </Box>
    )
}