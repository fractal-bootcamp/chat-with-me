import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter, useParams } from 'react-router-dom'
import { Lobby } from './components/Lobby.tsx'
import { Thread } from './components/Thread.tsx'
// pick a theme of your choice
import original from 'react95/dist/themes/original';
import peggysPastels from 'react95/dist/themes/peggysPastels';
// original Windows95 font (optionally)
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { MenuList, MenuListItem, styleReset } from 'react95';
import { Glob } from 'bun';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/threads",
    element: <Lobby />

  },
  {
    path: "/threads/:id",
    element: <Thread />

  }
])

function handleId(id: string | undefined) {
  if (id) {
    return (id)
  }
  else {
    return ''
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={peggysPastels}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
