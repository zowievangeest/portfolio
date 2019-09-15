import {StringUtil} from '../../utilities/string-util'
import User from '../../model/user-model'
import {generateJWT, getUserId} from '../../services/auth-service'

/**
 * Authentication request
 * @param req
 * @param res
 * @returns {*|Promise<any>}
 */
export function index(req, res) {
  const validation = validateIndex(req.body)
  if (!validation.isValid) {
    return res.status(400).json({message: validation.message})
  }

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
 * Authentication find current user
 * @param req
 * @param res
 * @returns {*|Promise<any>}
 */
export function currentUser(req, res) {
  const id = getUserId(req)
  if (id) {
    User.findOne({_id: id}, (error, user) => {
      if ((error && !user) || user === null) {
        return res.status(500).json({message: 'Gebruiker niet gevonden'})
      }
      const {_id, first, last, email, createdAt, updatedAt} = user
      return res
        .status(200)
        .json({data: {_id, first, last, email, createdAt, updatedAt}})
    })
  } else {
    return res.status(500).json({message: 'ID niet gevonden'})
  }
}

/**
 * Authentication validation on email and password
 * @param body
 * @returns {{isValid: *, message: string}}
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
