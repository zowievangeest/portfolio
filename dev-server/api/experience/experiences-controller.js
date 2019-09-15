import User from '../../model/user-model'
import Experience from '../../model/experience-model'
import * as auth from '../../services/auth-service'

/**
 * Experiences request
 * @param req
 * @param res
 */
export function index(req, res) {
  Experience.find({}, (error, experiences) => {
    if (error) {
      return res.status(500).json()
    }
    return res.status(200).json({experiences: experiences})
  }).populate('author', 'email', 'user')
}

/**
 * Create new experience
 * @param req
 * @param res
 */
export function create(req, res) {
  const id = auth.getUserId(req)
  User.findOne({_id: id}, (error, user) => {
    if (error && !user) {
      return res.status(500).json()
    }
    const experience = new Experience(req.body.experience)
    experience.author = user._id

    experience.save(error => {
      if (error) {
        return res.status(500).json()
      }
      return res.status(201).json()
    })
  })
}

/**
 * Update experience
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

    const experience = new Experience(req.body.experience)
    experience.author = user._id
    Experience.findByIdAndUpdate({_id: experience._id}, experience, error => {
      if (error) {
        return res.status(500).json()
      }
      return res.status(204).json()
    })
  })
}

/**
 * Remove experience on id
 * @param req
 * @param res
 */
export function remove(req, res) {
  Experience.findOne({_id: req.params.id}, (error, experience) => {
    if (error) {
      return res.status(500).json()
    }
    if (!experience) {
      return res.status(404).json()
    }
    Experience.deleteOne({_id: req.params.id}, error => {
      if (error) {
        return res.status(500).json()
      }
      return res.status(204).json()
    })
  })
}

/**
 * Show experience based on id
 * @param req
 * @param res
 */
export function show(req, res) {
  Experience.findOne({_id: req.params.id}, (error, experience) => {
    if (error) {
      return res.status(500).json()
    }
    if (!experience) {
      return res.status(404).json()
    }
    return res.status(200).json({experience: experience})
  }).populate('author', {email: 'email', first: 'first', last: 'last'}, 'user')
}
