import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Import the generated route tree
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export type RouterContext = {
  queryClient: QueryClient
}

// Create a new QueryClient
const queryClient = new QueryClient()

// Create a new router instance
const router = createRouter({
  routeTree,
  context: { queryClient } satisfies RouterContext,
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
3
