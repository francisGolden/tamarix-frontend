import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <nav>
        <Link
          to="/"
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        <Link
          to="/about"
        >
          About
        </Link>
      </nav>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
