import React, {useContext} from 'react';
import {ViewContext} from '../hooks/ViewContext';
import {If} from './If';

export const Desktop = ({children}) => {
  const isDesktop = useContext(ViewContext);
  return <If condition={isDesktop}>{children}</If>;
};


