import User from '../../model/user-model'
import Project from '../../model/project-model'
import * as auth from '../../services/auth-service'

/**
 * Projects request
 * @param req
 * @param res
 */
export function index(req, res) {
  Project.find({}, (error, projects) => {
    if (error) {
      return res.status(500).json()
    }
    return res.status(200).json({projects: projects})
  }).populate('author', 'email', 'user')
}

/**
 * Create new project
 * @param req
 * @param res
 */
export function create(req, res) {
  const id = auth.getUserId(req)
  User.findOne({_id: id}, (error, user) => {
    if (error && !user) {
      return res.status(500).json()
    }
    const project = new Project(req.body.project)
    project.author = user._id

    project.save(error => {
      if (error) {
        return res.status(500).json()
      }
      return res.status(201).json()
    })
  })
}

/**
 * Update project
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

    const project = new Project(req.body.project)
    project.author = user._id
    Project.findByIdAndUpdate({_id: project._id}, project, error => {
      if (error) {
        return res.status(500).json()
      }
      return res.status(204).json()
    })
  })
}

/**
 * Remove project on id
 * @param req
 * @param res
 */
export function remove(req, res) {
  Project.findOne({_id: req.params.id}, (error, project) => {
    if (error) {
      return res.status(500).json()
    }
    if (!project) {
      return res.status(404).json()
    }
    Project.deleteOne({_id: req.params.id}, error => {
      if (error) {
        return res.status(500).json()
      }
      return res.status(204).json()
    })
  })
}

/**
 * Show project based on id
 * @param req
 * @param res
 */
export function show(req, res) {
  Project.findOne({_id: req.params.id}, (error, project) => {
    if (error) {
      return res.status(500).json()
    }
    if (!project) {
      return res.status(404).json()
    }
    return res.status(200).json({project: project})
  }).populate('author', 'email', 'user')
}
