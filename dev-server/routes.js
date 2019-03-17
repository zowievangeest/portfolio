import postRoutes from './api/post/posts-routes'
import regRoutes from './api/register/register-routes'
import userRoutes from './api/user/user-routes'
import authRoutes from './api/auth/auth-routes'

/**
 * Registering all routes used by the API
 * @param app
 */
export function registerRoutes(app) {
  app.use('/api', postRoutes)
  app.use('/api', regRoutes)
  app.use('/api', userRoutes)
  app.use('/api', authRoutes)
}
