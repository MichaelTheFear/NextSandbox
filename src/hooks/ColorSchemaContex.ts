import {createContext, Dispatch} from 'react';

export const ColorSchemaContext = createContext<[string, Dispatch<string>]>([
  'light',
  () => {},
]);
