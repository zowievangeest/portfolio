import About from '../../model/about-model'
import Certificates from '../../model/certificate-model'
import Educations from '../../model/education-model'
import Experiences from '../../model/experience-model'
import Posts from '../../model/post-model'

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
    )
  ])
    .then(results => {
      const [about, certificates, educations, experiences, posts] = results
      return res.status(200).json({
        about,
        certificates,
        educations,
        experiences,
        posts
      })
    })
    .catch(e => {
      console.error(e)
      return res.status(500).json()
    })
}
