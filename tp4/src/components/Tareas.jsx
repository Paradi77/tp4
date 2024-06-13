import React from 'react';
import { Container, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

export const Tareas = ({ todos, onDelete, onComplete }) => {

  const handleComplete = (id) => {
    onComplete(id);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <Container maxWidth="sm">
      <List>
        {todos.map((todo, index) => (
          <ListItem 
            key={index} 
            sx={{ 
              bgcolor: todo.completada ? "rgb(190, 255, 190)" : "rgb(190, 190, 190)", 
              borderRadius: "4px", m: 0.9,
            }}
          >
            <ListItemText
              primary={
                <span style={{ textDecoration: todo.completada ? 'line-through' : 'none' }}>
                  {todo.texto}
                </span>
              }
            />
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleComplete(todo.id)} edge="end">
                <DoneIcon color={todo.completada ? 'primary' : 'disabled'} />
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
