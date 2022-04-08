import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import '../styles/globals.css';

import GlobalProvider from '../stores';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </GlobalProvider>
  );
}

export default MyApp;
