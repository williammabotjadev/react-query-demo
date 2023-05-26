import React from 'react';
import { useQuery } from '@tanstack/react-query';
import  DotLoader  from 'react-spinners/DotLoader';

function App() {

  const fetchTodoList = () => {

  }

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodoList,
  });

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
