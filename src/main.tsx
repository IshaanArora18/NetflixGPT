import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App'
import SignUp from './SignUp'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Browse from './Browse'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <SignUp />
      },
      {
        path: "/browse",
        element: <Browse />
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  // </StrictMode>,
)
