import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = localStorage.getItem('token')

  if (isAuthenticated) {
    return <>{children}</>
  } else {
    return <Navigate to='/login' />
  }
}

export default PrivateRoute
