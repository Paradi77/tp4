import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

export const HeaderToDo = ({agregarTodo}) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit= (e) => {
        e.preventDefault(); // Evitar que el formulario se envíe
        if (inputValue.trim()) {
            agregarTodo(inputValue);
            setInputValue("");
        }
    }

    return (
        <Container maxWidth="sm" sx={{backgroundColor:"rgb(190, 190, 190)", textAlign: "center", borderRadius: "15px"}}>
            <Typography variant='h2' >To Do App</Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{display: "flex", justifyContent: "center"}}>
                <TextField id="filled-basic" label="Tarea" variant="filled" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <Button variant="contained" type='submit'>Agregar</Button>
            </Box>
        </Container>
    );
};
