import postRoutes from './api/post/posts-routes'
import regRoutes from './api/register/register-routes'
import userRoutes from './api/user/user-routes'
import authRoutes from './api/auth/auth-routes'
import experienceRoutes from './api/experience/experiences-routes'
import educationRoutes from './api/education/educations-routes'
import certificateRoutes from './api/certificate/certificates-routes'
import aboutRoute from './api/about/about-routes'

/**
 * Registering all routes used by the API
 * @param app
 */
export function registerRoutes(app) {
  app.use('/api', postRoutes)
  app.use('/api', regRoutes)
  app.use('/api', userRoutes)
  app.use('/api', authRoutes)
  app.use('/api', experienceRoutes)
  app.use('/api', educationRoutes)
  app.use('/api', certificateRoutes)
  app.use('/api', aboutRoute)
}
