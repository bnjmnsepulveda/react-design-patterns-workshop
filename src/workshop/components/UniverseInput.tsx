import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



export default function UniverseInput({ universes }) {

    const [universe, setUniverse] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setUniverse(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120, margin: 10 }}>
            <FormControl fullWidth>
                <InputLabel id="universe-select">Universe</InputLabel>
                <Select
                    labelId="universe-select"
                    id="universe-select"
                    value={universe}
                    label="Universe"
                    onChange={handleChange}
                >
                    {universes.map(universe => <MenuItem value={universe}>{universe}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
}