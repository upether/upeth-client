import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';

import GlobalProvider from '../stores';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </GlobalProvider>
  );
}

export default MyApp;
