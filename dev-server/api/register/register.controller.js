import {StringUtil} from '../../utilities/string-util'
import User from '../../model/user-model'

/**
 * Register user
 * @param req
 * @param res
 * @returns {*|Promise<any>}
 */
export function index(req, res) {
  const validation = validateIndex(req.body)
  if (!validation.isValid) {
    return res.status(400).json({message: validation.message})
  }

  const secure = secrureRoute(
    process.env.SECURITY_CODE,
    req.headers.security || req.headers['security']
  )
  if (secure) {
    const user = new User({
      email: req.body.email,
      password: req.body.password,
      first: req.body.first,
      last: req.body.last
    })
    user.save(error => {
      if (error) {
        if (error.code === 11000) {
          return res.status(403).json({message: 'Email is already taken'})
        }
        return res.status(500).json()
      }
      return res.status(201).json()
    })
  } else {
    return res.status(401).json({message: 'Provide secret code'})
  }
}

/**
 * Validation before creating new User
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
  if (StringUtil.isEmpty(body.first)) {
    errors += 'First name is required. '
  }
  if (StringUtil.isEmpty(body.last)) {
    errors += 'Last name is required. '
  }

  return {
    isValid: StringUtil.isEmpty(errors),
    message: errors
  }
}

/**
 * Return if the route has to be secure
 * @param securityCodeEnv
 * @param securityCode
 * @returns {boolean}
 */
function secrureRoute(securityCodeEnv, securityCode) {
  return securityCodeEnv === securityCode
}
