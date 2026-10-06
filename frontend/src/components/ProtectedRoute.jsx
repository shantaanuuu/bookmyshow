import { Navigate, useLocation } from 'react-router-dom'
export default function ProtectedRoute({ user, adminOnly = false, children }) { const location = useLocation(); if (!user) return <Navigate to="/login" replace state={{ from: location.pathname }} />; if (adminOnly && user.role !== 'admin') return <Navigate to="/" replace />; return children }
