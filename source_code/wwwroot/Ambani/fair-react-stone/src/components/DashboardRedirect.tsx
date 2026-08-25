import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * DashboardRedirect Component
 * 
 * Automatically redirects authenticated users from "/" to "/match/888" (Cricket matches)
 * This ensures users land on the cricket matches page after login
 */
const DashboardRedirect = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to cricket matches (sportId: 4)
    console.log('🏏 Redirecting to cricket matches (/match/888)')
    navigate('/match/888', { replace: true })
  }, [navigate])

  // Show nothing while redirecting
  return null
}

export default DashboardRedirect

