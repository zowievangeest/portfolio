import About from '../../model/about-model'
import Certificates from '../../model/certificate-model'
import Educations from '../../model/education-model'
import Experiences from '../../model/experience-model'
import Posts from '../../model/post-model'
import Projects from '../../model/project-model'

/**
 * Portfolio request
 * @param req
 * @param res
 */
export function index(req, res) {
  Promise.all([
    About.findOne({}),
    Certificates.find(),
    Educations.find(),
    Experiences.find(),
    Posts.find().populate(
      'author',
      {email: 'email', first: 'first', last: 'last'},
      'user'
    ),
    Projects.find().populate(
      'author',
      {email: 'email', first: 'first', last: 'last'},
      'user'
    )
  ])
    .then(results => {
      const [
        about,
        certificates,
        educations,
        experiences,
        posts,
        projects
      ] = results
      return res.status(200).json({
        about,
        certificates,
        educations,
        experiences,
        posts,
        projects
      })
    })
    .catch(e => {
      console.error(e)
      return res.status(500).json()
    })
}
