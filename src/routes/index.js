// Login view
const Login = () => import('../views/admin/Login').then(m => m.default || m)

// Portfolio views
const Home = () => import('../views/Home').then(m => m.default || m)

// Dashboard views
const Dashboard = () =>
  import('../views/admin/Dashboard').then(m => m.default || m)
const Overview = () =>
  import('../views/admin/Overview').then(m => m.default || m)
const Posts = () => import('../views/admin/Posts').then(m => m.default || m)
const Profiel = () => import('../views/admin/Profiel').then(m => m.default || m)

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'login',
    component: Login
  },
  {
    path: '/admin/dashboard',
    name: 'dashboard',
    component: Dashboard,
    redirect: '/admin/dashboard/overview',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview
      },
      {
        path: 'posts',
        name: 'posts',
        component: Posts
      },
      {
        path: 'profiel',
        name: 'profiel',
        component: Profiel
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]
