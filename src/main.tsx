import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Import the generated route tree
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

// register the useGSAP hook to avoid React version discrepancies
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText)

// Create a new router instance
const router = createRouter({ routeTree })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
