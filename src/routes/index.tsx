import { Onboarding } from '@/presentation/components/onboarding/Onboarding'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [ready, setReady] = useState(false)

  if (!ready) return <Onboarding onComplete={() => setReady(true)} />

  // todo: add view transition API
  return <div>Home</div>
}
