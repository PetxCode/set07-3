import { RouterProvider } from "react-router-dom"
import { mainRoute } from './routes/mainRoute'
import { StateProvider } from './Global/stateProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StateProvider>   
        <RouterProvider router={mainRoute} />
      </StateProvider>
    </QueryClientProvider>
  )
}

export default App