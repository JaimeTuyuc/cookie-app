import React, { useEffect, useState } from 'react';
import type { AppContext, AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import '@/styles/globals.css'
import { lightTheme, darkTheme, customTheme } from '../themes'
import { Theme } from '@mui/system'
import Cookies from 'js-cookie';

interface Props extends AppProps {
  theme: string
}
export default function App({ Component, pageProps, theme }: Props) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light'
    const selectedTheme = cookieTheme === 'light'
      ? lightTheme
      : cookieTheme === 'dark' 
      ? darkTheme
        : customTheme
    
    setCurrentTheme(selectedTheme)
  },[])


  return (
    <>
      <ThemeProvider
        theme={currentTheme}
      >
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
/*
App.getInitialProps = async (appContext: AppContext) => {
  
  const { theme } = appContext.ctx.req ? (appContext.ctx.req as any).cookies : { theme: 'light' }
  const validThemes = ['light', 'dark', 'custom']
  return {
    theme: validThemes.includes(theme) ? theme : 'light'
  }
}
*/