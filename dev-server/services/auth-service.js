/**
 * Used to perform all authentication-related operations
 * For example, generating a token, getting the email, etc.
 */

import jwt from 'jsonwebtoken'

/**
 * Generates a JWT token which is signed with email, password and TOKEN_SECRET
 * @param user
 * @returns {*}
 */
export function generateJWT(user) {
  const tokenData = {email: user.email, id: user._id}
  return jwt.sign({user: tokenData}, process.env.TOKEN_SECRET)
}

/**
 * Function for requiring login before a call is made
 * @param req
 * @param res
 * @param next
 * @returns {*|Promise<any>}
 */
export function requireLogin(req, res, next) {
  const token = decodeToken(req)
  if (!token) {
    return res.status(401).json({message: 'You must be logged in.'})
  }
  next()
}

/**
 * Will verify that the token came from this application (using secret). Then,
 * will decode it and grab the signed data (email, etc.) and return decoded token
 * @param req
 * @returns {*}
 */
export function decodeToken(req) {
  const token = req.headers.authorization || req.headers['authorization']

  if (!token) {
    return null
  }

  try {
    return jwt.verify(token, process.env.TOKEN_SECRET)
  } catch (error) {
    return null
  }
}

/**
 * GetEmail from token
 * @param req
 * @returns {*}
 */
export function getEmail(req) {
  const token = decodeToken(req)
  if (!token) {
    return null
  }
  return token.user.email
}

/**
 * getUserId from token
 * @param req
 * @returns {*}
 */
export function getUserId(req) {
  const token = decodeToken(req)
  if (!token) {
    return null
  }
  return token.user.id
}
