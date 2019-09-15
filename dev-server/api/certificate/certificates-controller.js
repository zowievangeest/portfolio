import User from '../../model/user-model'
import Certificate from '../../model/certificate-model'
import * as auth from '../../services/auth-service'

/**
 * Certificates request
 * @param req
 * @param res
 */
export function index(req, res) {
  Certificate.find({}, (error, certificates) => {
    if (error) {
      return res.status(500).json()
    }
    return res.status(200).json({certificates: certificates})
  }).populate('author', 'email', 'user')
}

/**
 * Create new certificate
 * @param req
 * @param res
 */
export function create(req, res) {
  const id = auth.getUserId(req)
  User.findOne({_id: id}, (error, user) => {
    if (error && !user) {
      return res.status(500).json()
    }
    const certificate = new Certificate(req.body.certificate)
    certificate.author = user._id

    certificate.save(error => {
      if (error) {
        return res.status(500).json()
      }
      return res.status(201).json()
    })
  })
}

/**
 * Update certificate
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

    const certificate = new Certificate(req.body.certificate)
    certificate.author = user._id
    Certificate.findByIdAndUpdate(
      {_id: certificate._id},
      certificate,
      error => {
        if (error) {
          return res.status(500).json()
        }
        return res.status(204).json()
      }
    )
  })
}

/**
 * Remove certificate on id
 * @param req
 * @param res
 */
export function remove(req, res) {
  Certificate.findOne({_id: req.params.id}, (error, certificate) => {
    if (error) {
      return res.status(500).json()
    }
    if (!certificate) {
      return res.status(404).json()
    }
    Certificate.deleteOne({_id: req.params.id}, error => {
      if (error) {
        return res.status(500).json()
      }
      return res.status(204).json()
    })
  })
}

/**
 * Show certificate based on id
 * @param req
 * @param res
 */
export function show(req, res) {
  Certificate.findOne({_id: req.params.id}, (error, certificate) => {
    if (error) {
      return res.status(500).json()
    }
    if (!certificate) {
      return res.status(404).json()
    }
    return res.status(200).json({certificate: certificate})
  }).populate('author', {email: 'email', first: 'first', last: 'last'}, 'user')
}
