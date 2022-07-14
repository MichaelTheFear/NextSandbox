import React, {useState, useEffect} from 'react';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, DarkTheme, BaseProvider} from 'baseui';
import {styletron} from '../styletron';
import {ViewProvider} from './ViewProvider';
import {ColorSchemaContext} from './ColorSchemaContex';

export const WrapperProvider = ({children}) => {
  const [userPreference, setUserPreference] = useState('light');
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    setUserPreference(prefersDarkMode.matches ? 'dark' : 'light');
  }, []);
  return (
    <StyletronProvider value={styletron}>
      <ColorSchemaContext.Provider value={[userPreference, setUserPreference]}>
        <BaseProvider theme={userPreference==='light'? LightTheme:DarkTheme}>
          <ViewProvider>{children}</ViewProvider>
        </BaseProvider>
      </ColorSchemaContext.Provider>
    </StyletronProvider>
  );
};
