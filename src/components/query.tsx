import React from 'react';
import { useQuery, QueryClientProvider } from '@tanstack/react-query';
import  DotLoader  from 'react-spinners/DotLoader';

const override: React.CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function QueryDemo() {
  const [color, setColor] = React.useState("#ffffff")

  const fetchTodoList = () => {

  }

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodoList,
  });

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

  return (
    <div className="App">
      
    </div>
  );
}

export default QueryDemo;
