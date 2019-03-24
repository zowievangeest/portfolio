// Login view
const Login = () => import('../views/admin/Login').then(m => m.default || m)

// Portfolio views
const Portfolio = () => import('../views/Portfolio').then(m => m.default || m)

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

// Projects
const Projects = () =>
  import('../views/admin/projects/Projects').then(m => m.default || m)
const ProjectsCreate = () =>
  import('../views/admin/projects/ProjectsCreate').then(m => m.default || m)
const ProjectsAll = () =>
  import('../views/admin/projects/ProjectsAll').then(m => m.default || m)
const ProjectsEdit = () =>
  import('../views/admin/projects/ProjectsEdit').then(m => m.default || m)

// About
const About = () =>
  import('../views/admin/about/About').then(m => m.default || m)

// Portfolio
const PortfolioHome = () =>
  import('../views/portfolio/home/Home').then(m => m.default || m)

const PortfolioAbout = () =>
  import('../views/portfolio/about/About').then(m => m.default || m)

const PortfolioExperiences = () =>
  import('../views/portfolio/experiences/Experiences').then(m => m.default || m)

const PortfolioEducations = () =>
  import('../views/portfolio/educations/Educations').then(m => m.default || m)

const PortfolioItems = () =>
  import('../views/portfolio/portfolio/PortfolioItems').then(
    m => m.default || m
  )

const PortfolioBlog = () =>
  import('../views/portfolio/blog/Blog').then(m => m.default || m)

const PortfolioBlogSingle = () =>
  import('../views/portfolio/blog/BlogSingle').then(m => m.default || m)

export default [
  {
    path: '/',
    name: 'portfolio',
    component: Portfolio,
    redirect: '/home',
    props: true,
    children: [
      {
        path: 'home',
        name: 'portfolio/home',
        component: PortfolioHome
      },
      {
        path: 'about',
        name: 'portfolio/about',
        component: PortfolioAbout
      },
      {
        path: 'expriences',
        name: 'portfolio/experiences',
        component: PortfolioExperiences
      },
      {
        path: 'educations',
        name: 'portfolio/educations',
        component: PortfolioEducations
      },
      {
        path: 'portfolio',
        name: 'portfolio/portfolio',
        component: PortfolioItems
      },
      {
        path: 'blog',
        name: 'portfolio/blog-posts',
        component: PortfolioBlog
      },
      {
        path: 'blog/:id',
        name: 'portfolio/blog-posts-single',
        component: PortfolioBlogSingle
      }
    ]
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
        path: 'projects',
        name: 'projects',
        component: Projects,
        redirect: '/admin/dashboard/projects/all',
        children: [
          {
            path: 'all',
            name: 'projects/all',
            component: ProjectsAll
          },
          {
            path: 'create',
            name: 'projects/create',
            component: ProjectsCreate
          },
          {
            path: 'edit/:id',
            name: 'projects/edit',
            component: ProjectsEdit
          }
        ]
      },
      {
        path: 'about',
        name: 'about',
        component: About
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
