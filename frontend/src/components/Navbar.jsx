import { Link, NavLink, useNavigate } from 'react-router-dom'
export default function Navbar({ user, onLogout }) {
  const navigate = useNavigate(); const logout = () => { onLogout(); navigate('/') }
  return <header className="navbar"><Link className="brand" to="/"><span className="brand-mark">C</span> CINEVAULT</Link><nav><NavLink to="/">Movies</NavLink><a href="#search">Search</a>{user?.role === 'user' && <NavLink to="/my-bookings">My Bookings</NavLink>}{user?.role === 'admin' && <NavLink to="/admin">Admin</NavLink>}</nav><div className="nav-account">{user ? <><NavLink to={user.role === 'admin' ? '/admin' : '/profile'}>{user.name.split(' ')[0]}</NavLink><button onClick={logout}>Log out</button></> : <Link className="login-button" to="/login">Login</Link>}</div></header>
}
