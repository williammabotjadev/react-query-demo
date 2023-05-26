import React from 'react';
import { useQuery, QueryClientProvider } from '@tanstack/react-query';
import  DotLoader  from 'react-spinners/DotLoader';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import axios from 'axios';

const override: React.CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function QueryDemo() {
  const [color, setColor] = React.useState("#ffffff")

  const fetchTodoList = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos/")
        .then(data => console.log(data))
        .catch(err => console.log(err))
  }

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodoList,
  });

  React.useEffect(() => {
    fetchTodoList();
  }, [])

  if (isLoading) {
    return <>
          <DotLoader
              loading={isLoading}
              color={color}
              cssOverride={override}
              size={150}
              aria-label='Loading Spinner'
              data-testid='loader'
          />
    </>;
  }

  if (isError) {
    return <>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error">This is an error alert — check it out!</Alert>
            </Stack>
    </>;
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default QueryDemo;
