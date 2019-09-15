/**
 * User test response
 * @param req
 * @param res
 * @returns {*|Promise<any>}
 */
export function index(req, res) {
  return res.status(200).json({message: 'Hello World'})
}
