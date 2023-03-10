import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { useApollo } from '../hooks/useAppolo';
import './globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const client = useApollo(pageProps.initialApolloState);
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return(
    
    <ApolloProvider client={client}>
      {getLayout(<Component {...pageProps} />)}
      </ApolloProvider>

  ) 
}

export default MyApp;
