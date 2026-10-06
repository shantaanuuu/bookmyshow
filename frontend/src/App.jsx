import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthPage, Home, Placeholder } from './pages/Pages'
import './App.css'

function App() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user') || 'null'))
  const onAuth = ({ user: currentUser, token }) => { localStorage.setItem('user', JSON.stringify(currentUser)); localStorage.setItem('token', token); setUser(currentUser) }
  const logout = () => { localStorage.removeItem('user'); localStorage.removeItem('token'); setUser(null) }
  const privatePage = <ProtectedRoute user={user}><Placeholder /></ProtectedRoute>
  const adminPage = <ProtectedRoute user={user} adminOnly><Placeholder /></ProtectedRoute>
  return <BrowserRouter><Navbar user={user} onLogout={logout} /><Routes>
    <Route path="/" element={<Home />} /><Route path="/login" element={<AuthPage mode="login" onAuth={onAuth} />} /><Route path="/register" element={<AuthPage mode="register" onAuth={onAuth} />} />
    <Route path="/movies/:id" element={<Placeholder />} /><Route path="/shows/:movieId" element={<Placeholder />} /><Route path="/seats/:showId" element={privatePage} /><Route path="/payment" element={privatePage} /><Route path="/ticket/:bookingId" element={privatePage} /><Route path="/my-bookings" element={privatePage} /><Route path="/profile" element={privatePage} />
    <Route path="/admin" element={adminPage} /><Route path="/admin/movies" element={adminPage} /><Route path="/admin/theatres" element={adminPage} /><Route path="/admin/shows" element={adminPage} /><Route path="/admin/bookings" element={adminPage} /><Route path="/admin/users" element={adminPage} />
  </Routes></BrowserRouter>
}
export default App
