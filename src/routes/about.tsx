import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
      head: () => ({
        meta: [{ title: "About Tamarix" }],
    })
})

function AboutComponent() {
  return (
    <main>
      <h3>About</h3>
    </main>
  )
}
