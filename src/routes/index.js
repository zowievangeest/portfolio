// Login view
const Login = () => import('../views/admin/Login').then(m => m.default || m)

// Portfolio views
const Home = () => import('../views/Home').then(m => m.default || m)

// Dashboard views
const Dashboard = () =>
  import('../views/admin/Dashboard').then(m => m.default || m)
const Overview = () =>
  import('../views/admin/Overview').then(m => m.default || m)
const Profiel = () => import('../views/admin/Profiel').then(m => m.default || m)

// Posts
const Posts = () =>
  import('../views/admin/posts/Posts').then(m => m.default || m)
const PostsCreate = () =>
  import('../views/admin/posts/PostsCreate').then(m => m.default || m)
const PostsAll = () =>
  import('../views/admin/posts/PostsAll').then(m => m.default || m)
const PostsSingle = () =>
  import('../views/admin/posts/PostsSingle').then(m => m.default || m)
const PostsEdit = () =>
  import('../views/admin/posts/PostsEdit').then(m => m.default || m)

// Experiences
const Experiences = () =>
  import('../views/admin/experiences/Experiences').then(m => m.default || m)
const ExperiencesCreate = () =>
  import('../views/admin/experiences/ExperiencesCreate').then(
    m => m.default || m
  )
const ExperiencesAll = () =>
  import('../views/admin/experiences/ExperiencesAll').then(m => m.default || m)
const ExperiencesEdit = () =>
  import('../views/admin/experiences/ExperiencesEdit').then(m => m.default || m)

// Educations
const Educations = () =>
  import('../views/admin/educations/Educations').then(m => m.default || m)
const EducationsCreate = () =>
  import('../views/admin/educations/EducationsCreate').then(m => m.default || m)
const EducationsAll = () =>
  import('../views/admin/educations/EducationsAll').then(m => m.default || m)
const EducationsEdit = () =>
  import('../views/admin/educations/EducationsEdit').then(m => m.default || m)

// Certificates
const Certificates = () =>
  import('../views/admin/certificates/Certificates').then(m => m.default || m)
const CertificatesCreate = () =>
  import('../views/admin/certificates/CertificatesCreate').then(
    m => m.default || m
  )
const CertificatesAll = () =>
  import('../views/admin/certificates/CertificatesAll').then(
    m => m.default || m
  )
const CertificatesEdit = () =>
  import('../views/admin/certificates/CertificatesEdit').then(
    m => m.default || m
  )

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
        component: Posts,
        redirect: '/admin/dashboard/posts/all',
        children: [
          {
            path: 'all',
            name: 'posts/all',
            component: PostsAll
          },
          {
            path: 'create',
            name: 'posts/create',
            component: PostsCreate
          },
          {
            path: 'single/:id',
            name: 'posts/single',
            component: PostsSingle
          },
          {
            path: 'edit/:id',
            name: 'posts/edit',
            component: PostsEdit
          }
        ]
      },
      {
        path: 'experiences',
        name: 'experiences',
        component: Experiences,
        redirect: '/admin/dashboard/experiences/all',
        children: [
          {
            path: 'all',
            name: 'experiences/all',
            component: ExperiencesAll
          },
          {
            path: 'create',
            name: 'experiences/create',
            component: ExperiencesCreate
          },
          {
            path: 'edit/:id',
            name: 'experiences/edit',
            component: ExperiencesEdit
          }
        ]
      },
      {
        path: 'educations',
        name: 'educations',
        component: Educations,
        redirect: '/admin/dashboard/educations/all',
        children: [
          {
            path: 'all',
            name: 'educations/all',
            component: EducationsAll
          },
          {
            path: 'create',
            name: 'educations/create',
            component: EducationsCreate
          },
          {
            path: 'edit/:id',
            name: 'educations/edit',
            component: EducationsEdit
          }
        ]
      },
      {
        path: 'certificates',
        name: 'certificates',
        component: Certificates,
        redirect: '/admin/dashboard/certificates/all',
        children: [
          {
            path: 'all',
            name: 'certificates/all',
            component: CertificatesAll
          },
          {
            path: 'create',
            name: 'certificates/create',
            component: CertificatesCreate
          },
          {
            path: 'edit/:id',
            name: 'certificates/edit',
            component: CertificatesEdit
          }
        ]
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
