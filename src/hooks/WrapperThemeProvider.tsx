import React from 'react';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, DarkTheme, BaseProvider} from 'baseui';
import {styletron} from '../styletron';
import {ViewProvider} from '../hooks/ViewProvider';

export const WrapperThemeProvider = ({children}) => {
    
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <ViewProvider>{children}</ViewProvider>
      </BaseProvider>
    </StyletronProvider>
  );
};
