import React from 'react';
import { useQuery, QueryClientProvider, QueryClient } from '@tanstack/react-query';
import  DotLoader  from 'react-spinners/DotLoader';

function App() {

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
        <div>
            
        </div>
    </QueryClientProvider>
  );
}

export default App;
