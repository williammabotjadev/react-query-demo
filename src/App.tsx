import React from 'react';
import { useQuery, QueryClientProvider, QueryClient } from '@tanstack/react-query';
import DotLoader  from 'react-spinners/DotLoader';
import QueryDemo from './components/query';

function App() {

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
        <div>
            <QueryDemo />
        </div>
    </QueryClientProvider>
  );
}

export default App;
