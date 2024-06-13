import { Container, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

export const TareasApi = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setTodos(data));
    }, []);

    const handleComplete = (id) => {
        // Aquí podrías enviar una solicitud para marcar la tarea como completada
        // Por ahora, solo actualizaremos el estado local para simularlo
        setTodos(prevTodos => prevTodos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        }));
    };

    const handleDelete = (id) => {
        // Aquí podrías enviar una solicitud para eliminar la tarea
        // Por ahora, solo actualizaremos el estado local para simularlo
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    return (
        <Container maxWidth="sm">
            <List>
                {todos.map(todo => (
                    <ListItem key={todo.id} sx={{ bgcolor: "rgb(190, 190, 190)", borderRadius: "4px" }}>
                        <ListItemText primary={todo.title} secondary={todo.completed ? 'Completado' : 'Pendiente'} />
                        <ListItemSecondaryAction>
                            <IconButton onClick={() => handleComplete(todo.id)} edge="end">
                                <DoneIcon color={todo.completed ? 'primary' : 'disabled'} />
                            </IconButton>
                            <IconButton onClick={() => handleDelete(todo.id)} edge="end">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};