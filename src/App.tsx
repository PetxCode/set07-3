import React from 'react'
import { RouterProvider } from "react-router-dom"
import { mainRoute } from './routes/mainRoute'
import { StateProvider } from './Global/stateProvider'
import ScrollToTop from './ToTop'
const App = () => {
  return (

    <StateProvider>   

        <RouterProvider router={mainRoute} />
      </StateProvider>

  )
}

export default App