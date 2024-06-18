import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter, useParams } from 'react-router-dom'
import { Lobby } from './components/Lobby.tsx'
import { Thread } from './components/Thread.tsx'

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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
