import User from '../../model/user-model'
import Post from '../../model/post-model'
import * as auth from '../../services/auth-service'

/**
 * Posts request
 * @param req
 * @param res
 */
export function index(req, res) {
  Post.find({}, (error, posts) => {
    if (error) {
      return res.status(500).json()
    }
    return res.status(200).json({posts: posts})
  }).populate('author', 'email', 'user')
}

/**
 * Create new post
 * @param req
 * @param res
 */
export function create(req, res) {
  const id = auth.getUserId(req)
  User.findOne({_id: id}, (error, user) => {
    if (error && !user) {
      return res.status(500).json()
    }
    const post = new Post(req.body.post)
    post.author = user._id

    post.save(error => {
      if (error) {
        return res.status(500).json()
      }
      return res.status(201).json()
    })
  })
}

/**
 * Update post
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

    const post = new Post(req.body.post)
    post.author = user._id
    Post.findByIdAndUpdate({_id: post._id}, post, error => {
      if (error) {
        return res.status(500).json()
      }
      return res.status(204).json()
    })
  })
}

/**
 * Remove post on id
 * @param req
 * @param res
 */
export function remove(req, res) {
  Post.findOne({_id: req.params.id}, (error, post) => {
    if (error) {
      return res.status(500).json()
    }
    if (!post) {
      return res.status(404).json()
    }
    Post.deleteOne({_id: req.params.id}, error => {
      if (error) {
        return res.status(500).json()
      }
      return res.status(204).json()
    })
  })
}

/**
 * Show post based on id
 * @param req
 * @param res
 */
export function show(req, res) {
  Post.findOne({_id: req.params.id}, (error, post) => {
    if (error) {
      return res.status(500).json()
    }
    if (!post) {
      return res.status(404).json()
    }
    return res.status(200).json({post: post})
  }).populate('author', {email: 'email', first: 'first', last: 'last'}, 'user')
}
