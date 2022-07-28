import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { lightTheme, darkTheme } from '../theme/shared';
import globalStyles from '../styles/globalStyles';

import { Toaster } from 'react-hot-toast';
import { CERAMIC_URL, CONNECT_NETWORK } from '@utils/constants';
import { Provider } from '@self.id/framework';
import { Provider as MultiAuth } from '@multiauth/components/provider'
import { networks } from '@utils/auth';
import  SSRProvider  from 'react-bootstrap/SSRProvider'

function App({ Component, pageProps }: AppProps) {
  globalStyles();
  const { state, ...props } = pageProps

  return (
    <Provider client={{ ceramic: CERAMIC_URL, connectNetwork: CONNECT_NETWORK }} state={state}>
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    ><NextUIProvider>
      <MultiAuth networks={networks}>
        <SSRProvider>
          <Component {...props} />
          </SSRProvider>
        </MultiAuth>
      </NextUIProvider>
    </NextThemesProvider>
    </Provider>
  );
}

export default App;
