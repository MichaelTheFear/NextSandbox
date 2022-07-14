import React from 'react';
import {ViewContext} from './ViewContext';
import { useDesktop } from './useDesktop';

export const ViewProvider:React.FC = ({children}) => {
  const isDesktop = useDesktop();
  return (
    <ViewContext.Provider value={isDesktop}>{children}</ViewContext.Provider>
  )
}

