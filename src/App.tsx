import React from 'react'
import { RouterProvider } from "react-router-dom"
import { mainRoute } from './routes/mainRoute'
import { StateProvider } from './Global/stateProvider'
const App = () => {
  return (
    <div>
      <StateProvider>
        <RouterProvider router={mainRoute} />
      </StateProvider>
    </div>
  )
}

export default App