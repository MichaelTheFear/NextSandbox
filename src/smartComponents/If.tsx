import React from 'react'

export const If = ({children,condition}) => {
  return condition ? <>{children}</>: null;
}


