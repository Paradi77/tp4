import React, { useState } from 'react';
import Box from "@mui/material/Box";
import { HeaderToDo } from './components/HeaderToDo';
import { Tareas } from './components/Tareas';
import { Button, Container } from '@mui/material';
import { TareasApi } from './components/TareasApi';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [componenteActivo, setComponenteActivo] = useState('tareas');

  const cambiarComponente = (componente) => {
    setComponenteActivo(componente);
  };

  const agregarTodo = (texto) => {
    setTodos([...todos, { id: todos.length + 1, texto, completada: false }]);
  };

  return (
    <>
      <Box>
        <HeaderToDo agregarTodo={agregarTodo} />
        <Container maxWidth= "sm" sx={{display:"flex", justifyContent: "center", mt: 2, gap: 4}}>
          <Button variant='contained' onClick={() => cambiarComponente('tareas')}>Tareas</Button>
          <Button variant='contained' onClick={() => cambiarComponente('api')}>API</Button>
        </Container>
        {componenteActivo === 'tareas' && 
          <Tareas todos={todos} onDelete={(id) => {
            setTodos(todos.filter(todo => todo.id !== id));
          }} onComplete={(id) => {
            setTodos(todos.map(todo => {
              if (todo.id === id) {
                return {...todo, completada: !todo.completada};
              }
              return todo;
            }));
          }} />
        }
        {componenteActivo === 'api' && <TareasApi  />}
      </Box>
    </>
  );
};
