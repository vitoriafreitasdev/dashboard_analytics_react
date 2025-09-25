

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Home from './routes/Home.tsx'
import ActiveUsers from './routes/ActiveUsers.tsx'
import ConversationRate from './routes/ConversationRate.tsx'
import AverageTicket from './routes/AverageTicket.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/activeusers",
        element: <ActiveUsers />
      },
      {
        path: "/conversionrate",
        element: <ConversationRate />
      },
      {
        path: "/averageticked",
        element: <AverageTicket/>
      }
      

    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)