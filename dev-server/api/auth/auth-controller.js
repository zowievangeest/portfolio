import {StringUtil} from '../../utilities/string-util'
import User from '../../model/user-model'
import {generateJWT, getUserId} from '../../services/auth-service'

export function index(req, res) {
  // First verify that the user provided a email and a password
  const validation = validateIndex(req.body)
  if (!validation.isValid) {
    return res.status(400).json({message: validation.message})
  }

  // Find the user in the database
  User.findOne({email: req.body.email.toLowerCase()}, (error, user) => {
    if (error) {
      return res.status(500).json()
    }

    if (!user) {
      return res.status(401).json()
    }

    const passwordsMatch = User.passwordMatches(
      req.body.password,
      user.password
    )
    if (!passwordsMatch) {
      return res.status(401).json()
    }
    const token = generateJWT(user)
    const {_id, first, last, email, createdAt, updatedAt} = user

    return res.status(200).json({
      access_token: token,
      user: {_id, first, last, email, createdAt, updatedAt}
    })
  })
}

/**
 *
 * @param req
 * @param res
 */
export function currentUser(req, res) {
  const id = getUserId(req)
  User.findOne({_id: id}, (error, user) => {
    if (error && !user) {
      return res.status(500).json()
    }
    const {_id, first, last, email, createdAt, updatedAt} = user
    return res
      .status(200)
      .json({data: {_id, first, last, email, createdAt, updatedAt}})
  })
}

/**
 * Validates the index request method
 * @param {HTTP Request Body} body
 */
function validateIndex(body) {
  let errors = ''

  if (StringUtil.isEmpty(body.email)) {
    errors += 'Email is required. '
  }

  if (StringUtil.isEmpty(body.password)) {
    errors += 'Password is required. '
  }

  return {
    isValid: StringUtil.isEmpty(errors),
    message: errors
  }
}
