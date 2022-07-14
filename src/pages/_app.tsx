import React from 'react';
import App from 'next/app';
import { WrapperProvider } from '@hooks/WrapperProvider';

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    return (
      <WrapperProvider>
            <Component {...pageProps} />
      </WrapperProvider>
    );
  }
}
