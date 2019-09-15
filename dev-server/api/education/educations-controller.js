import User from '../../model/user-model'
import Education from '../../model/education-model'
import * as auth from '../../services/auth-service'

/**
 * Educations request
 * @param req
 * @param res
 */
export function index(req, res) {
  Education.find({}, (error, educations) => {
    if (error) {
      return res.status(500).json()
    }
    return res.status(200).json({educations: educations})
  }).populate('author', 'email', 'user')
}

/**
 * Create new education
 * @param req
 * @param res
 */
export function create(req, res) {
  const id = auth.getUserId(req)
  User.findOne({_id: id}, (error, user) => {
    if (error && !user) {
      return res.status(500).json()
    }
    const education = new Education(req.body.education)
    education.author = user._id

    education.save(error => {
      if (error) {
        return res.status(500).json()
      }
      return res.status(201).json()
    })
  })
}

/**
 * Update education
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

    const education = new Education(req.body.education)
    education.author = user._id
    Education.findByIdAndUpdate({_id: education._id}, education, error => {
      if (error) {
        return res.status(500).json()
      }
      return res.status(204).json()
    })
  })
}

/**
 * Remove education on id
 * @param req
 * @param res
 */
export function remove(req, res) {
  Education.findOne({_id: req.params.id}, (error, education) => {
    if (error) {
      return res.status(500).json()
    }
    if (!education) {
      return res.status(404).json()
    }
    Education.deleteOne({_id: req.params.id}, error => {
      if (error) {
        return res.status(500).json()
      }
      return res.status(204).json()
    })
  })
}

/**
 * Show education based on id
 * @param req
 * @param res
 */
export function show(req, res) {
  Education.findOne({_id: req.params.id}, (error, education) => {
    if (error) {
      return res.status(500).json()
    }
    if (!education) {
      return res.status(404).json()
    }
    return res.status(200).json({education: education})
  }).populate('author', {email: 'email', first: 'first', last: 'last'}, 'user')
}
