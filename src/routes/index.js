const Login = () =>
  import('../views/pages/auth/Login').then(m => m.default || m)
const About = () => import('../views/About').then(m => m.default || m)
const Dashboard = () => import('../views/Dashboard').then(m => m.default || m)
const Home = () => import('../views/Home').then(m => m.default || m)

export default [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]
