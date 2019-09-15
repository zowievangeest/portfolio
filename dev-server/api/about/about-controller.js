import User from '../../model/user-model'
import About from '../../model/about-model'
import * as auth from '../../services/auth-service'

/**
 * About request
 * @param req
 * @param res
 */
export function index(req, res) {
  About.findOne({}, (error, about) => {
    if (error) {
      return res.status(500).json()
    }
    return res.status(200).json({about: about})
  }).populate('author', 'email', 'user')
}

/**
 * Create new about
 * @param req
 * @param res
 */
export function create(req, res) {
  const id = auth.getUserId(req)
  User.findOne({_id: id}, (error, user) => {
    if (error && !user) {
      return res.status(500).json()
    }
    const about = new About(req.body.about)
    about.author = user._id

    about.save(error => {
      if (error) {
        return res.status(500).json()
      }
      return res.status(201).json()
    })
  })
}

/**
 * Update about
 * @param req
 * @param res
 */
export function update(req, res) {
  const id = auth.getUserId(req)

  User.findOne({_id: id}, (error, user) => {
    if (error) {
      return res.status(500).json()
    }
    if (!user) {
      return res.status(404).json()
    }

    const about = new About(req.body.about)
    about.author = user._id
    About.findByIdAndUpdate({_id: about._id}, about, error => {
      if (error) {
        return res.status(500).json()
      }
      return res.status(204).json()
    })
  })
}
