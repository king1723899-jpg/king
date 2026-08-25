import React from 'react'
import { Link, LinkProps, useNavigate } from 'react-router-dom'
import { RoleType } from '../../../models/User'
import { selectUserData } from '../../../redux/actions/login/loginSlice'
import { useAppSelector } from '../../../redux/hooks'

export const CustomLink = React.memo(({ children, to, ...props }: LinkProps) => {
  const userState = useAppSelector(selectUserData)
  const urlPrefix = React.useMemo(() => {
    if (userState.user.role && userState.user.role !== RoleType.user) {
      if (typeof to !== 'string') return to
      if (to.startsWith('/admin')) return to
      return `/admin${to.startsWith('/') ? to : `/${to}`}`
    }
    return to
  }, [userState && userState.user.role, to])

  return (
    <Link to={urlPrefix} {...props}>
      {children}
    </Link>
  )
})

export const useNavigateCustom = () => {
  const navigate = useNavigate()
  const userSate = useAppSelector(selectUserData)

  const push = React.useCallback((to: any, state: any) => navigate(to, { state }), [])

  const replace = React.useCallback(
    (to: any, state: any) => navigate(to, { replace: true, state }),
    [],
  )

  const go = React.useCallback(
    (delta: any) => {
      if (typeof delta === 'number') {
        return navigate(delta)
      }
      if (userSate.user.role && userSate.user.role !== RoleType.user) {
        const route = String(delta || '')
        if (!route) return navigate('/admin')
        if (route.startsWith('/admin')) return navigate(route)
        return navigate(`/admin${route.startsWith('/') ? route : `/${route}`}`)
      }
      return navigate(delta)
    },
    [userSate, navigate],
  )

  const back = React.useCallback(() => navigate(-1), [])

  const forward = React.useCallback(() => navigate(1), [])

  return {
    back,
    forward,
    go,
    push,
    replace,
  }
}
